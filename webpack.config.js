var path = require('path');

module.exports = {
    entry: {
        main: './app/main.js'
    },
    output: {
        path: './build',
        filename: '[name].built.js'
    },
    resolve: {
        modulesDirectories: [
            'app',
            'node_modules'
        ],
        alias: {
          'socket.io': path.resolve( 'node_modules', 'socket.io-client', 'socket.io.js' ),
          'mapping': path.resolve( 'node_modules', 'knockout.mapping', 'knockout.mapping.js' ),
          'lodash': path.resolve( 'node_modules', 'lodash-amd' ),
          'app/config': path.resolve( 'app', 'config.js' ),
          'domready': path.resolve( 'node_modules', 'domready', 'ready.js' ),
          'app/components': path.resolve( 'app', 'components' )
        }
    },
    module: {
        noParse: [
          // /node_modules/
        ]
    },
    devtool: 'source-map'
};
