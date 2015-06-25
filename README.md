# IsoStack

This project was started with the [react isomorphic boilerplate](https://github.com/jmfurlott/react-isomorphic-boilerplate) as an isomorphic application in React.js.


## Stack

- React.js
- Webpack
- Express
- react-router
- Babel
- Jade
- npm-run-all

## Installation instructions

### Prereqs
Git
Node

 In the project's directory, run the following commands:
```
 $ npm install
 $ npm start
```
 
In Windows npm can not yet run operation in parallel so we add in npm-run-all<br />
Change the start command in package.json to:<br />
"start": "npm-run-all --parallel watch-js dev-server server",

```
 $ npm install
 $ npm install --save-dev npm-run-all
 $ npm start
```

When the servers are started, visit `http://localhost:3000` to see a Hello world page.

## Next steps:

- Add [flux](https://github.com/facebook/flux).
- Drop in better CSS
- Improve the build task system. Using `npm scripts` is definitely the simplest but a quick look at the `package.json` shows how complicated it can quickly become.
- Separate out `dev` and `prod` environments using Jade and multiple webpack configuration files
- Improve the hierarchy of the folders. `server` is a mess right now and should be cleaned up/separated into a structure that makes more sense and is easier to maintain.
- Make the server rendering and client rendering asynchronous
- Parse data from static json files and populate on page
- Add in SuperAgent for retrieving that data live
- Form support for sending info back through webapi
- Add registration/authentication/authorization (g+/Facebook/custom)
- Upload files

## Thanks

This repo was based on [react isomorphic boilerplate](https://github.com/jmfurlott/react-isomorphic-boilerplate) by [jmfurlott](http://github.com/jmfurlott)
