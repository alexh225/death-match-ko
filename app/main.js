define([
    'knockout',
    'helpers/componentHelper',
    'models/appModel',
    'domready'
], function(ko, ComponentHelper, AppModel, domready) {

    domready(function() {

        new ComponentHelper().registerComponents();

        this.appModel = new AppModel();

        ko.applyBindings();

    });

});