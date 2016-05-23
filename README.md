# Installation:

From the root directory: `npm install`

### Run the app (v2.0+)
___
To run the app, run this command from the root directory: `node server.js`

The site can be viewed at: **http://localhost:3000**

### Run unit tests (v1.5+)
___
1. Run this command from the command line: `karma start`

### Run visual tests
___
1. Make sure to install PhantomJS: `npm install -g phantomjs@1.9.8`
2. Start a local web/file server
3. Make sure the url on line 3 of tests/visual/index.spec.js matches your the address of your local server
4. Run this command from a command line prompt: `casperjs test tests/visual/index.spec.js`

### Compile SASS to CSS
___
1. Start the SASS watcher from the root directory: `sass --watch scss:css`

# tags

* v1.0 - app with visual diff example
* v1.1 - app with module loader added and main.js created
* v1.2 - knockout and text plugin implemented, app divided into high level components
* v1.3 - all components created, scss files split into either component or separate file
* v1.4 - viewmodel created for warrior component, component helper created to register all components
* v1.5 - adding karma to run unit tests, warrior.spec.js file created
* v1.6 - create appModel with mock data, and pass it through components
* v1.7 - create matchup viewmodel, random oponents functionality
* v1.8 - increment scores on click and choose new oponents
* v1.9 - sort leaderboard decending by wins
* v2.0 - express server now included in project
* v2.1 - adding socket.io to the server
* v2.2 - adding socket.io client and sending initial data from the server
* v2.3 - emitting event on warrior selection, increment now done on server
* v2.4 - gulp task runner added with linting, test and sass tasks