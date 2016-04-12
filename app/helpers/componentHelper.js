define([
	'knockout'
], function(ko){

	var ComponentHelper = function() {

		this.registerComponents = function(config) {

			for(var name in config) {
				ko.components.register(name, config[name]);	
			}

		};

	};

	return ComponentHelper;

});