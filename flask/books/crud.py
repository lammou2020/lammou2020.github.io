from bookshelf import login_required_auth, get_model,  storage
from flask import Blueprint, current_app, redirect, render_template, request, \
    session, url_for, send_file

crud = Blueprint('crud', __name__)

def upload_image_file(file):
    """
    Upload the user-uploaded file to Local Storage and retrieve its
    publicly-accessible URL.
    """
    if not file:
        return None
    public_url = storage.upload_file(
        file,
        file.filename,
        file.content_type,
        current_app.config['UPLOAD_FOLDER']
    )
    current_app.logger.info(
        "Uploaded file %s as %s.", file.filename, public_url)
    return public_url

@crud.route("/")
def list():
    token = request.args.get('page_token', None)
    if token:
        token = token.encode('utf-8')
    books, next_page_token = get_model().list(cursor=token)
    return render_template(
        "list.html",
        books=books,
        next_page_token=next_page_token)

# [START list_mine]
@crud.route("/mine")
@login_required_auth
def list_mine():
    token = request.args.get('page_token', None)
    if token:
        token = token.encode('utf-8')
    books, next_page_token = get_model().list_by_user(
        user_id=session['profile']['id'],
        cursor=token)
    return render_template(
        "list.html",
        books=books,
        next_page_token=next_page_token)
# [END list_mine]

@crud.route('/<id>')
def view(id):
    book = get_model().read(id)
    return render_template("view.html", book=book)


# [START add]
@crud.route('/add', methods=['GET', 'POST'])
@login_required_auth
def add():
    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        # If an image was uploaded, update the data to point to the new image.
        image_url = upload_image_file(request.files.get('image'))
        if image_url:
            data['imageUrl'] = image_url

        # If the user is logged in, associate their profile with the new book.
        if 'profile' in session:
            data['createdBy'] = session['profile']['displayName']
            data['createdById'] = session['profile']['id']

        book = get_model().create(data)

        return redirect(url_for('.view', id=book['id']))

    return render_template("form.html", action="Add", book={})
# [END add]


@crud.route('/<id>/edit', methods=['GET', 'POST'])
@login_required_auth
def edit(id):
    book = get_model().read(id)

    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        image_url = upload_image_file(request.files.get('image'))

        if image_url:
            data['imageUrl'] = image_url

        book = get_model().update(data, id)

        return redirect(url_for('.view', id=book['id']))

    return render_template("form.html", action="Edit", book=book)

@crud.route('/<id>/delete')
@login_required_auth
def delete(id):
    get_model().delete(id)
    return redirect(url_for('.list'))

@crud.route('/img/<filename>')
def showimage(filename):
    # Get current path os.getcwd()
    path = current_app.config['UPLOAD_FOLDER']
    FilePath=path+"/"+filename
    return send_file(FilePath,
            mimetype = 'image/*')
    # Delete the zip file if not needed    

