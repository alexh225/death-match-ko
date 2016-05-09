define([
    'knockout',
    'mapping'
], function(ko, mapping) {

    var mockWarriors = [
        { id: 1231, name: 'Mr. T', 			wins: 0, image: 'images/mr-t.jpg' },
        { id: 1232, name: 'Chuck Norris', 	wins: 0, image: 'images/chuck-norris.jpg' },
        { id: 1233, name: 'Darth Vader', 	wins: 0, image: 'images/darth-vader.jpg' },
        { id: 1234, name: 'Rocky Balboa', 	wins: 0, image: 'images/rocky-balboa.jpg' },
        { id: 1235, name: 'T2000', 			wins: 0, image: 'images/t2000.jpg' },
        { id: 1236, name: 'Nitro', 			wins: 0, image: 'images/nitro.jpg' }
    ];

    var warriorsMappingConfig = {
        // the key callback allows us to return the property to use as the key for the
        // array element. the mapping plugin will use this key to determine if items are
        // add, delete or update.
        key: function(item) {
            return ko.unwrap(item.id);
        },
        // the create callback gives us control of the raw object that is being added. in our
        // case we only want to make the wins property observable.
        create: function(item) {
            return mapping.fromJS(item.data, {
                observe: ['wins']
            });
        }
    };

    var AppModel = function() {
        return {
            warriors: mapping.fromJS(mockWarriors, warriorsMappingConfig)
        };
    };

    return AppModel;

});