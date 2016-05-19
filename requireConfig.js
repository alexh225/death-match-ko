requirejs.config({
    paths: {
        'components': 'app/components',
        'helpers': 'app/helpers',
        'models': 'app/models',
        'node_modules': 'node_modules',
        'text': 'node_modules/text/text',
        'knockout': 'node_modules/knockout/build/output/knockout-latest',
        'lodash': 'node_modules/lodash-amd',
        'mapping': 'node_modules/knockout.mapping/knockout.mapping',
        'socket.io': 'node_modules/socket.io-client/socket.io'
    },
    shim: {
        mapping: {
            deps: ['knockout'],
            exports: 'mapping'
        }
    }
});