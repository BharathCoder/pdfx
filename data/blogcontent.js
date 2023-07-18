const path = require('path')
const htmlContent = `HTML Introduction
What is HTML?

    HTML is an initialism for "HyperText Markup Language".
    It is the language of the web.
    It is used to create websites.
    It is used to define a page layout, meaning it is a barebone page structure.
    HTML is used for making pages of the website also called webpages that we see on the internet
    It consists of a set of tags.
    This set of tags is written in HTML Document.
    ".html" or ".htm" is the extension.
    There are so many versions of HTML but HTML5 is the latest version.

 
Features of HTML

    It is platform-independent.
    Images, videos, and audio can be added to a web page.
    Hypertext can be added to the text.
    It is a markup language.
    It is interpreted language
    It can be integrated with other languages like CSS, JavaScript etc.
    Semantic Structure.
    local Storage & Indexed DB - Client-side data storage.
    Offline Capabilities (PWA) with Cache API & Service Workers.


Why the word HyperText & Markup Language

The word hypertext markup language comprises the words “hypertext” and “markup language”. The term "hypertext" refers to the linking of text with other documents and “markup language” refers to a language that uses a set of tags.

So, HTML is the linking of text with other documents using some set of tags.

 

Note:- Tags refers to some meaningful texts enclosed in angle braces <...>. For eg. <head>. Each tag has a different meaning and importance in building an HTML page which can affect the web page in its own ways 
A beautiful analogy to understand HTML:
        Here in the explanation for the above analogy, the car skeleton refers to HTML with the page body. When that skeleton is painted it the car gets CSS and after all that car is provided with some functionalities like engine, etc (which refers to JavaScript), the car gets life and can run. Similarly, when we develop our websites we need HTML for the structure and if we want our website to look good and prettier we need CSS and if we want to add functionalities to our webpage we need JavaScript.
        History of HTML:
            In 1989, Tim Berners Lee established www and created HTML in 1991. 
            From 1995 to 1997, he started working on versions of HTML.
            In 1999, a committee was organized that made HTML4.0 a standard.
            HTML4.0 is used by many, even today. However, the stable version of HTML is 5.0 also known as HTML5.`
const cssContent = `History

CSS was created by Håkon Wium Lie to allow web designers to change their website's layout, colours, and fonts. Originally, websites were meant to be used by researchers only, so the decoration did not matter. However, the need to make them look nice grew when websites became widespread.

 
Why the word “Cascade”?

The Cascade determines which CSS rules will be applied when multiple rules for an item are contradicting in the style sheet. 

 
Key features of CSS

    Used to style and layout webpages
    Written in HTML and XML
    The last version was CSS 2.1, but seeing the scope everything now comes under the umbrella of CSS without any version number.
    Reusability of the same rules for multiple HTML documents.

 
Why learn CSS?

CSS though optional, adds beauty to a website. It helps the user to design a majestic website according to their own liking.`

const jsContent = `What is ECMAScript?

ECMAScript is a standard on which JavaScript is based!

It was created to ensure that different documents on JavaScript are talking about the same language.

 
ECMAScript Versions: 

Beginning in 1997, JavaScript has evolved into many versions.

    ECMAScript1 or ES1 was first released in 1997. 
    ECMAScript 2015 also known as ES6 was released in 2015 and a major revision to JavaScript was made.
    The latest version of JavaScript will be ECMaScript2022 (ES13) in 2022.

What is JavaScript?

    JavaScript is a lightweight, OOP language.
    It is a scripting language for web pages.
    It is used to add interactivity and dynamic effects to web pages.
    “.js” is the extension.
    Nowadays used in server-side development.
    JS Frontend Frameworks: React, Angular, Vue.
    JS Backend Frameworks: Express, Node.`
const pyContent = `
What is Python

    Python is a dynamically typed, General Purpose Programming Language that supports an object-oriented programming approach as well as a functional programming approach.
    Python is also an interpreted and high-level programming language.
    It was created by Guido Van Rossum in 1989.

 
Features of Python

    Python is simple and easy to understand.
    It is Interpreted and platform-independent which makes debugging very easy.
    Python is an open-source programming language.
    Python provides very big library support. Some of the popular libraries include NumPy, Tensorflow, Selenium, OpenCV, etc.
    It is possible to integrate other programming languages within python.

 
What is Python used for

    Python is used in Data Visualization to create plots and graphical representations.
    Python helps in Data Analytics to analyze and understand raw data for insights and trends.
    It is used in AI and Machine Learning to simulate human behavior and to learn from past data without hard coding.
    It is used to create web applications.
    It can be used to handle databases.
    It is used in business and accounting to perform complex mathematical operations along with quantitative and qualitative analysis.`

    const blogs = [
    {
        title: "Intro to HTML",
        shortContent: "This is the tutorial for HTML introduction",
        coverPath: __dirname + `../static/img/html.png`,
        content: htmlContent,
        slug: "html-introduction"
    },
    {
        title: "Intro to CSS",
        shortContent: "This is the tutorial for CSS introduction",
        coverPath: __dirname + `../static/img/html.png`,
        content: cssContent,
        slug: "css-introduction"
    },
    {
        title: "Intro to JavaScript",
        shortContent: "This is the tutorial for JS introduction",
        coverPath: __dirname + `../static/img/html.png`,
        content: jsContent,
        slug: "javascript-introduction"
    },
    {
        title: "Intro to Python",
        shortContent: "This is the tutorial for Python introduction",
        coverPath: __dirname + `../static/img/html.png`,
        content: pyContent,
        slug: "python-introduction"
    },
]

module.exports = blogs