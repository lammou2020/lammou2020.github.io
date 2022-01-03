# 網頁應用初級設計

## 前言

自我介紹，我是碼農，也做過幾年電腦老師，我是最平凡一個人。每當培訓課時被問，隔離是公務員、慱企、大公營事業等等，我還是有理想的，真是來學野的!

綜述個人對網站編程技能總結，寫一些最簡單用法，同學們分享。不足之處，請多指教!

## Git/GitHub 源碼版本管理

網頁存於在github.io, 是github提供的功能!  

![](static/git_github.png)   


學習推薦     
👍[生產力Git課程](https://github.com/makzan/beginning-git-version-control)    
👍[Github QuickStart](https://docs.github.com/en/get-started/quickstart/hello-world)


簡單說明關係!   
GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
源碼版本管理及恊作遠端雲平台，讓你同其人也一齊恊助完成項目(不限地點)。

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.(free and open source)源碼版本管理系統。

![](https://git-scm.com/book/en/v2/images/distributed.png)   

作業:

1. [安裝Git](https://git-scm.com/download/win)   

2. [註冊GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)  

3. github pages 實作內容   
參考[Github Pages QuickStart](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site)     
假設: tigeryear2022.github.io  
index.md(使用Markdown文檔指令)   
A.修改主標題  
B.插入圖片   
C.超連結   

4. Git
```cmd
c:\code>git clone https://github.com/tigeryear2022.github.io
c:\code\tigeryear2022.github.io>git --global user.email=""
c:\code\tigeryear2022.github.io>git --global user=""
c:\code\tigeryear2022.github.io>notepad index.md 
c:\code\tigeryear2022.github.io>git add .
c:\code\tigeryear2022.github.io>git commit -m "修改主頁"
c:\code\tigeryear2022.github.io>git push
c:\code\tigeryear2022.github.io>rem "出現網頁要求輸入用戶密碼"
```

5. 加入文件

```cmd
static\js
static\css
static\img
page2.html
index.md
```

[git 其他內容...](git.html) 

![](static/markdown.png)

[文檔書寫 MarkDowm](https://www.markdownguide.org/basic-syntax/)  

The Markdown Guide is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document.

## 一. Web 前端

HTML5 CSS3 JS
![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/execution.png)

### HTML5

HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

[實作內容](html5.html)   

### CSS3

CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

[實作內容](css3.html)   

### JavaScript

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

基礎JS(loop, if, array, JSON), 進階DOM, AJAX。

[實作內容](js_ex.html)   

### jQuery及UI

jQuery是一套跨瀏覽器的JavaScript函式庫，用於簡化HTML與JavaScript之間的操作。

[實作內容](jquery_ui_ex.html)   

### Bootstrap

自適應網頁設計(Responsive web design)，網頁自適應不同設備如, 電腦、手機、平板等設備Monitor尺寸。

## 二.  Python 易學易用
從下圖看出易學易用。最適合快速上手的人士!講求正確,不求速度。  
python效能是相對的,對我們普通人來,速快足够快!  
易用性，還有Node JS。   
![ease of use python](static/rust_lang.png) 
推薦     
👍[生產力Python課程](https://github.com/makzan/Beginning-Python-Course)

## 三. 資料庫MySQL/SQLite,Redis
![](static/database_category.png)


## 四. Web 后端

### Django / Flask， 二者皆為Python網站應用框架。

![](static/flask_django.png)   

我會主要介紹Flask。   

The “micro” in microframework means Flask aims to keep the core simple but extensible.  
Flask是一個使用Python編寫的Web應用微框架。基於Werkzeug WSGI工具箱和Jinja2模板引擎，使用簡單的核心，用擴充增加其他功能。  

### Python Session/login/logout 

### Python ORM資料庫操作

## 五. Python Module套件

|套件|
|---|
|Requests |
|Untangle|
|BeautifulSoup4|
|Selenium	|
|Numpy |
|Pandas|
|MatPlotLib|
|python-docx|
|openpyxl|
|Scipy|
|Sympy|

## 六. Computer Language of Future未來程式比較

易用性,Python , JS, Ruby。   
難學的有 C ,C++,.net,Java。  
Go/Rust更具未來性，有餘力可以努力加油!   

## Summary 總結

回顧，學習程式設計這門課的時候，理論算法很多。導師還是提供了實戰機會，數學基礎，職業技能，軟件技術趋向，英語技能，前沿性，當時沒懂。
我想寫總結一下Web前端和Python后端的技能，還有SampleCode實作分享! 努力寫作中! 耐心等待....

## Diary 日記 

[link](dairy.html)

## About 關於

我的動態域名,用不了,先留用着。464r747p64.qicp.vip   
[RapPiWebSite](http://464r747p64.qicp.vip)

contact to: mbc11thsp@gmail.com
