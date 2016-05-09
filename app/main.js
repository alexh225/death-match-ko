define([
	'knockout',
	'helpers/componentHelper',
	'models/appModel'
], function(ko, ComponentHelper, AppModel){
	
	new ComponentHelper().registerComponents();

	this.appModel = new AppModel();

	ko.applyBindings();

});