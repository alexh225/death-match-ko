define([
	'knockout',
	'helpers/componentHelper'
], function(ko, ComponentHelper){
	
	new ComponentHelper().registerComponents();

	ko.applyBindings();

});