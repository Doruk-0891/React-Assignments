# React - Assignment 1

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
Crossorigin enables Cross Origin Resource Sharing that allows the loading of external Javascript files from different origin  than the hosting web page.
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
npm manages the packages.
If we have to use package in our application, then we have to run **npm install package_name**.

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
When we run an application, build gets triggered. It will take some time and file gets created '.parcel-cache'
When we make changes in our application and save it then again builds gets triggered , this time it takes less time.
This reduction in time is because of parcel-cache.

Parcel caches the code.  
Parcel uses the cache code on subsequent builds that provides faster developing experience.
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

There is a file watcher algorithm  that keeps tracks of the changes made in any file and tells the server to reload.
A method which update the changes in the browser with code changes.

## 5 Parcel fetaures-

- Hot Module Replacement
- Tree Shaking
- Differential building
- Minfication
- Optimization

## What is .gitignore?

.gitignore is a file in which all files that should not undergo the git stages or commit.
.gitignore should have node_modules, dist, parcel-cache as they can be regenerate.
.gitignore must avoid to have files such as package.json, package-lock.json and our application or source code files.

## package.json vs package-lock.json
|package.json|package-lock.json|
|--------------------------|---------------------------|
|package.json file keeps the generic version of all dependencies required in the application. | package-lock.json keeps the specific or exact version of all the dependencies required in our application.|

## Why we should not modify package-lock.json?
package-lock.json keeps track of the specific version of depeendencies used in the application.
Upon modification, our app can gets crashed because of some unsupportable features that were not exist in the package-lock.json file used while developing the application.

## What is node_mdoules?

node_modules is a folder that gets installed when we use npm to install a package.
It's like a databse for npm.
It have all transitive dependencies and each have their own package.json file.
One should not push it on git, as it is very heavy and can be regenerate.

## What is /dist folder?

When a bundler, bundles the application, a minified and optimized version of source code gets stored in dist folder.

When we run npx parcel index.html,
a development build gets triggered and serves onto the server.

When we run npx build parcel index.html,
a production build gets created which takes care of optmization, minifaction, clean and bundles the application.This is where dist folder gets created.

## What is browserslist?

browserslist is a tool that specifies which browsers are compatible to our frontend app.

## caret ^ vs tilda ~
Both are used to handle the range of version for project dependencies.

|caret ^ | tilda ~|
|-----------------|----------------------|
|^ indicates the most recent major version, that means it will update all the version, if we have ^ 1.2.3 the all versions 1.2.3 to <2.0.0| ~ indicates the minor version that is patch releases. Suppose if we have version 1.2.3 then it indicates or match 1.2.x but not 1.3.x versions.|

# Assignment3

## What is JSX?
**JSX** is Javascript Syntax Extension that used in React to create an application easily.
It's HTML-like syntax.
JSX is not part of React.
JS Engine understands ecmascript.
So JSX code gets transpiled before rendering to browser.

Parcel takes a code and acts as a manager pass this task to a module - Babel.
Babel takes JSX code and transpiled it into format that browser can understand.


## Benefits of JSX.
- Becomes easy to write the code as code becomes readable, as we don't have to use React.createElement.
- The JSX code returns the React element in return.
- JSX santize the code
    - If someone gets access to our JS code, then malicious data can be send which gets displayed onto the browser. This is cross site scripting.
    - Then local storage, session storage, cookies, get cookies , gets access to device, all such access would be available.
    - JSX prevenst the attack.
    - JSX sanitize the code before rendering.
    

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
So, for every object in DOM there is an object in virtual DOM, it just does not have power to update the layout.
Manipulating real DOM is slow, but manipulating virtual DOM is fast.
Any update in the state of an application, there is change in virtual DOM and not directly in real DOM.

## Reconciliation

- In react, everything treated as a component.
- Components have state and whenever there is change in state , virtual DOM tree gets updated.
- React have two virtual at each time- one is updated Virtual DOM and other is just pre-update version of updated Virtual DOM.
- Now it compares the two virtual DOM and get to know the exact changes in the component.
- The process in which updated Virtual DOM is compared with pre-updated virtual DOM is **diffing**.<br>
- React send the udpates in batches which means changes in real DOM are sent in batches instead of sending single update in the state of component.
- The entire process of transforming the changes into the real DOM is **reconciliation**.

## React Fiber


## Why we need keys in React? When to use keys?
Keys gives the identity to the elements.<br>
Keys are used to identify the changes, updated or deleted elements.<br>
While listing or riterating over the list, use keys.

## Can we use index as a key in React?
Yes, we can  but it is highly discouraged to use it.<br>
Reorder of the array elements can lead to poor performance.<br>
React gets confused if elements from an array gets removed, added or reordered as which element mapped to which element.
React re-renders the all of the related component instead of just updating the specific one.

## props in React.
props are the properties of a component that can be passed from one component to the other component.

## Config Driven UI
Its a user interface that builds on configurable data.
The data coming from an api and it can change based on certain factors such as user, location and so on.

# Assignment 5

## Named exports , default exports and * .
**Named exports**
- can export multiple exports from a same file.
- Have to use same name to import as exported in export file.
- Have to use braces to import.

**Default exports**
- can export only one as default.
- can use different name while importing.
- import it without braces.

**'*'**
- exports all the things.
- imports every function, variable, object and anything else.

## Config.js file
**Config.js** is used to have all constants, mock data, url's and so on.

## React hooks
React hooks are the feature in React16.8
These are functions that hooks into state and lifecycle features from functional components.

## Need of useState hook
Using normal Javsacript variable can store the updated value, however it will not be rendered onto the UI.
If we want to render, then the updated value gets lost.
To resolve this, we need useState hook which provides a local state variable which stores the updated value and render the screen with updated value.
And we can bind our UI element with the data using useState variable.

# Assignment 6

## Microservice
Instead of bundling every service of an application together, the idea is to split it up into smaller set of interconnected services, each perform its own specific task.This is microservice.
Each service has it own set of rules and tools.
Each service can use REST or messaging or any other means to communicate.

Benefits:
- Simpler Development.
- Scalable
- Flexible
- Continuous Deployment.
- Separation of concerns.
- Single responsiblity.

## Monolith
This is a architecture in which business logic, UI layer and database , all are into one package.
Cons:
- Slow startup.
- Size and complexity limitation.
- Difficult for continuous deployment.
- Any change requires the entire application to gets deployed.
- Requires manual testing on any change.
- Scalable challenges.
- Adoption of new technologies is difficult.

## Need of useEffect hook.
Side Effects are all those that are outside of the scope of react.
Eg: updating a DOM, using a web service, calling an api call and so on.
To eliminate the side effects and we need something that can keep track of side effects as render is very fast, we use useEffect hook.

## Optional Chaining
This is an error proof way to access the properties in the nested objects.

## Shimmer UI
It'a method in which when data is getting fetched, until then shapes, layout of the content mimics the actual content.
Benfits:
- Improve user experience.
- Remove cognitive load.

## Conditional Rendering
Render the element based on a condition.
eg:
{isLogin? <Home /> : <SignUp />}

## CORS:
Cross Origin Resource Sharing.
It's a HTTP-header mechanism that allows a server to detect the origin other than its own to check whether is it permissible to load the resources.

## async and await
async and await, is a way to write an promise based code.
async functions will always return a promise.
await pause the execution until promise resolves.

## const json = await data.json();
converting the fetched data from an api to JSON, while it's promise based data, hence used await.
