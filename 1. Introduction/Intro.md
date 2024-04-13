# Introduction

## What is JavaScript

- One of the most widely used programmiong languages
- Companies like Netflix, Walmart, Paypal, Facebook, Google use JavaScript
- Can work as a front-end, back-end and full-stack development

## What can you do with it

- Can build
  - Web/Mobile Apps
  - Real-time Networking apps such as chats and vide streaming services
  - Command Line Tools
  - Games

## Where does JavaScript code run

- Was designed to run on browsers.
- Every Browser has a JavaScript Engine
  - Firefox: Spidermonkey
  - Chrome: v8
- Node is a C++ program that includes Google v8's JavaScript engine, enabling us to run JavaScript outside of a browser
- This enables us to build the backend for our mobile applications

## JavaScript vs ECMAScript

- ECMAScript is a specification
- JavaScript is a programming language that confirms to this specification
- ECMAScript was released in 1997, and in 2015 they released ES2015, or ES6.

## Setting up the Development Environment

1. Editor: Eg VS Code, Sublime etc
2. Node: Can be used to install third party libraries. Alternative is running JavaScript through your web browser

## Best Practice to put Script code in

- Although you can place `<script>` in both head and body, the best practice is usually to put it in the end of your `<body>` after all your code
- 2 reasons:

  1. The browser parses the file from top to bottom. So, if you place your javascript code in the top and run the page, the page will first try to parse the javascript code, which could take longer than parsing the html code. So, the place would appear white or blank for some time during this process
  2. Almost always, the javascript code that we have needs to communicate with the elements on the web page. For example, you would want to hide or show specific elements. In that case you want JavaScript to read the elements from the html page, which can only be done after writing the html part

- There are some exceptions to this, for example if you use third party libraries like bootstrap that require you to place in the head section
- You shouldn't usually write your javascript code inline with your html code. It should be in a different file. HTML is all about content and JavaScript is all about behavior so it's better to have them in seperate files

## Run JavaScript through Node

- You can run your javascript code through node
- Open a terminal/cmd. Go into your directory that contains of the JavaScript file and run `node index.js`
- Note that node does not support `alert()` from javascript. You can do a workaround for alert messages through the following code:

```javascript
// Pops up an alert for the user
// Won't work with Node
if (typeof window === "undefined") {
  console.log("Hello World");
} else {
  alert("Hello World");
}
```
