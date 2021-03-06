'use strict';

const express = require('express');
const images = require('./images');
const oauth2 = require('../lib/oauth2');
const model = require('./model-mysql');

const router = express.Router();

// Use the oauth middleware to automatically get the user's profile
// information and expose login/logout URLs to templates.
router.use(oauth2.template);

// Set Content-Type for all responses for these routes
router.use((req, res, next) => {
  res.set('Content-Type', 'text/html');
  next();
});

/**
 * GET /books
 *
 * Display a page of books (up to ten at a time).
 */
router.get('/', (req, res, next) => {
  model.listMore(10, req.query.pageToken, (err, entities, cursor) => {
    if (err) {
      next(err);
      return;
    }
    res.render('assetmng/list.pug', {
      books: entities,
      nextPageToken: cursor,
    });
  });
});

// [START mine]
// Use the oauth2.required middleware to ensure that only logged-in users
// can access this handler.
router.get('/mine', oauth2.required, (req, res, next) => {
  model.listBy(
    req.user.id,
    10,
    req.query.pageToken,
    (err, entities, cursor) => {
      if (err) {
        next(err);
        return;
      }
      res.render('assetmng/list.pug', {
        books: entities,
        nextPageToken: cursor,
      });
    }
  );
});
// [END mine]

/**
 * GET /assetmng/add
 *
 * Display a form for creating a book.
 */
router.get('/add', (req, res) => {
  res.render('assetmng/form.pug', {
    book: {},
    action: 'Add',
  });
});

/**
 * POST /assetmng/add
 *
 * Create a book.
 */
// [START add]
router.post(
  '/add',
  images.multer.single('image'),
  (req, res, next) => {
    const data = req.body;
    // If the user is logged in, set them as the creator of the book.
    if (req.user) {
      data.createdBy = req.user.displayName;
      data.createdById = req.user.id;
    } else {
      data.createdBy = 'Anonymous';
    }
    // Was an image uploaded? If so, we'll use its public URL
    // in cloud storage.
    if (req.file && req.file.cloudStoragePublicUrl) {
      data.imageUrl = req.file.cloudStoragePublicUrl;
    }
    // Save the data to the database.
    model.create(data, (err, savedData) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect(`${req.baseUrl}/${savedData.id}`);
    });
  }
);
// [END add]

/**
 * GET /assetmng/:id/edit
 *
 * Display a book for editing.
 */
router.get('/:book/edit', (req, res, next) => {
  model.read(req.params.book, (err, entity) => {
    if (err) {
      next(err);
      return;
    }
    res.render('assetmng/form.pug', {
      book: entity,
      action: 'Edit',
    });
  });
});
/**
 * POST /assetmng/:id/edit
 *
 * Update a book.
 */
router.post(
  '/:book/edit',
  images.multer.single('image'),
  (req, res, next) => {
    const data = req.body;
    if(req.file && req.file.filename) data.imageUrl=req.file.filename;
    model.update(req.params.book, data, (err, savedData) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect(`${req.baseUrl}/${savedData.id}`);
    });
  }
);

/**
 * GET /assetmng/:id
 *
 * Display a book.
 */
router.get('/:book', (req, res, next) => {
  model.read(req.params.book, (err, entity) => {
    if (err) {
      next(err);
      return;
    }
    res.render('assetmng/view.pug', {
      book: entity,
    });
  });
});

/**
 * GET /assetmng/:id/delete
 *
 * Delete a book.
 */
router.get('/:book/delete', (req, res, next) => {
  model.delete(req.user.id,req.params.book, err => {
    if (err) {
      next(err);
      return;
    }
    res.redirect(req.baseUrl);
  });
});

/**
 * Errors on "/assetmng/*" routes.
 */
router.use((err, req, res, next) => {
  // Format error and forward to generic error handler for logging and
  // responding to the request
  err.response = err.message;
  next(err);
});

module.exports = router;
