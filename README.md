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

# Assignment2

## What is npm?
npm is package manager.
It's a place where code or libraries centralized and people can use them.

## What is parcel/webpack? Why do we need it?
**Webpack:**
An bundler is bundles many files into a single file.
Webpack is a static module bundler.

**Parcel:**
Parcel is bundler that compiles our application.
Parcel performs several functions such as-
- Hot Module Replacement
- Minification
- Lazy Dev builds
- Error handling
- Tree shaking
- File Tracking Algorithm
- Optimization
- Compression
- Transpilation
- Differential building(supports old browsers)

## What is .parcel-cache?
**.parcel-cache** is a folder that stores the information while building our application, so that in re-build, it does not have to re-analyze and re-parse everything from scratch.

## What is npx?
**npx** is used to execute the Node packages.

## Difference between dependencies and devDependencies.

|dependencies|devDependencies|
|-------------|--------------|
|a dependency requires for the project or application.|a dev dependency requires during development to develop the application.|

## Tree Shaking?
It's a way by which the dead code or unused code gets removed while building so that our application be production ready.

## Hot Module Replacement.
A method which update the changes in the browser with code changes.


# Assignment3

## What is JSX?
**JSX** is Javacript Syntax Extension that used in React to create an application easily.

## Benefits of JSX.
- Becomes easy to write the code as code becomes readable.
- The JSX code returns the React element in return.

## type attrubute in script tag.
**type** attribute in script tag tells the type of script.
type  has values:
- **module** - script gets treated as a module.
- **importmap** - indicates that body of the element contains import map.Import map is  JSON object that developers use to control how the browsers would resolve JS modules.

## {Title()} vs \<Title>\</Title> vs \<Title />
{Title()}: this is Javascript code in JSX where Title() functional component gets called to render.

Others are another ways to render the component.

# Assignment4

## Is JSX mandatory for React?
NO. 
JSX made it easier to write react application. 
JSX gives more useful errors and warnings.

## Is ES6 mandatory for React?
NO.
We can use some other imports like 'create-react-class' for using the components functionality.

## Comments in JSX.
JSX is compiled to valid Javascript.
It has it's own to way to comments.
{/* */}, this is used to comment, inside this comments can be written down.

## React.fragments vs Empty tags
Both are used to get rid of extra wrapper container or element while returning or rendering the multiple elements.
However, there is a difference between the two.
|React.fragments|Empty tags|
|--------------|---------------|
|It's a React feature. |It's JSX syntax.|
|It can have a key attribute - **Keyed Fragments**|Cannot have a key attribute.|

## Virtual DOM
Virtual DOM is a lightweight copy of actual DOM.

## Reconciliation
The process in which updated Virtual DOM is compared with pre-updated virtual DOM is **diffing**.<br>
React uses batch updates to update the real DOM.<br>
That means updating the DOM using batches instead of updating the DOM for single change in the state of component.<br>
The entire process of transforming the changes into the real DOM is **reconciliation**.

## React Fiber


## Why we need keys in React? When to use keys?
Keys gives the identity to the elements.<br>
Keys are used to identify the changes, updated or deleted elements.<br>
While listing or riterating over the list, use keys.

## Can we use index as a key in React?
Yes, we can  but it is highly discouraged to use it.<br>
Reorder of the array elements can lead to poor performance.<br>
React gets confused if elements from an array gets removed, added or reordered as which element mapped to which element.

## props in React.
props are the properties of a component that can be passed from one component to the other component.

## Config Driven UI
Its a technique to build the UI using Config file in JSON format.