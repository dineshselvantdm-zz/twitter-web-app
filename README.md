# twitter-web-app
Twitter Demo Responsive App - JavaScript, HTML, CSS, SASS,NodeJS, Webpack, Jest, MithrilJS MVC, Marko 
Demo URL: https://twitter-web-app.herokuapp.com/javascript

Implemented Serverside Rendering with Isomorphic Javascript.
APIs are written in NodeJS with JSON stubs served as promises.
MithrilJS MVC is chosen as its light weight ~7KB gzipped and faster render time.
SASS is used as pre processing CSS.
Webpack is used for compiling assets.
Marko Templating Engine for streaming HTML.

Unit test cases done using Jest Framework.It includes:
1)Snapshot testing - Any new code change in view will prompt dev to accept the change
2)Model and Stubs Testing 

Run "npm test -- --watch" to start the test cases.

User Acceptance Test Cases:
1)Design should be similar to twitter mock with title image, timeline styles and left nav styles
2)Site should be responsive
3)Scroll should be smooth
4)More than two users should be present to switch
5)Composing a tweet should show at top of the page
6)Injecting a script in tweet should not execute javascript function.
Eg:- Tweet with <script>alert(document.cookie)</script>
7)URL should be changing on selecting user
8)Page should not be reloaded for switching user. It should be fast.
9)There should not be difference between server side rendered page and client page
10)Favicon should be present
11)Empty tweet should not be posted in timeline

