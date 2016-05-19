define([
    'knockout',
    'mapping',
    'socket.io'
], function(ko, mapping, io) {

    var socket = io.connect('http://localhost:3000');

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
        },
        // the update callback gives us control of how to handle updates
        update: function(item) {
            item.target.wins(item.data.wins);
            return item.target;
        }
    };

    var AppModel = function() {
        
        socket.on('allWarriorsData', this.handleAllWarriorsDataEvent.bind(this));
        
        this.warriors = ko.observableArray();

    };

    AppModel.prototype.handleAllWarriorsDataEvent = function(data) {
        mapping.fromJS(data, warriorsMappingConfig, this.warriors);
    };

    return AppModel;

});