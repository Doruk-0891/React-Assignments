# Ta'leem e React - Assignment 1

## Emmet:
An **Emmet** is a built-in feature in VSCode which prevents us to write the full code by giving the suggestions(Emmet abbreviation).

## Library vs Framework
|Library|Framework|
|----------------------|---------------------|
|Library performs set of specific and well defined operations|Framework is like a skeleton in which application defines the content of operations to filled the skeleton.|
|Control is in our hands|Framework is in control.|
|ReactJS|Angular|

## CDN and why do we use it?
CDN is a way to provide the fastest delivery of the content to the distributed worldwide users.

CDN is a group of servers that is strategically placed across the globe to accelarate the delivery of web content.

CDN provides:
* Security
* Increase in content availability and remove redundancy.
* Better load times.
* Low bandwidth cost.

## Why react is known as React?
React is a JS library to build user interfaces.
The library was designed to react to change its data.
Whenever there is change in data, the depenedent components gets updated (or be reactive) and gets rendered.

## Why crossorigin attribute used in React CDN links?
This attibute provides better error handling experience in React 16 or later.

## React vs ReactDOM
|React|ReactDOM|
|--------------------------|-----------------------|
|React is responsible for creating the views.|ReactDOM is responsible to render that view in the browser.|

## react.development.js VS react.production.js
|react.development.js|react.production.js|
|----------------|--------------|
|**file size** is huge - because of comments, code and debugging information to debug and troubleshoot the code |file size is small - because of minification, optimization, removal of unnecessary code.|
|**performance** - fine in performance|much better in performance as it is optimized|
|**Errors Message** - have better errors and warnings to debug and diagnose the errors. Additional checks and warnings are there.|Does not have additional checks and warnings.|