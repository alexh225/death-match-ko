define([
    'knockout'
], function(ko) {

    var warriors = ko.observableArray([
        { id: 1231, name: 'Mr. T', 			wins: 0, image: 'images/mr-t.jpg' },
        { id: 1232, name: 'Chuck Norris', 	wins: 0, image: 'images/chuck-norris.jpg' },
        { id: 1233, name: 'Darth Vader', 	wins: 0, image: 'images/darth-vader.jpg' },
        { id: 1234, name: 'Rocky Balboa', 	wins: 0, image: 'images/rocky-balboa.jpg' },
        { id: 1235, name: 'T2000', 			wins: 0, image: 'images/t2000.jpg' },
        { id: 1236, name: 'Nitro', 			wins: 0, image: 'images/nitro.jpg' }
    ]);

    var AppModel = function() {
        return {
            warriors: warriors
        };
    };

    return AppModel;

});