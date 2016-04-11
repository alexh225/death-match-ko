# Installation: 

npm install
npm install -g phantomjs@1.9.8


# Run tests: 

1. Start a local web server that servers the index.html file (try using something like Serve - http://get-serve.com/) 
2. Make sure that the url on line 3 of tests/visual/index.spec.js is correct
3. Start the SASS watcher from a command line propmt: 	**sass --watch scss:css**
4. Run this command from a command line prompt:  **casperjs test tests/visual/index.spec.js**

# tags 

v1.0 - app with visual diff example
v1.1 - app with module loader added and main.js created
v1.2 - knockout and text plugin implemented, app divided into high level components
v1.3 - all components created, scss files split into either component or separate file