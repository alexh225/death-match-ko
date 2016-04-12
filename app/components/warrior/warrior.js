define([
	'knockout'
], function(ko){

	var Warrior = function(params){

		var params = params || {};

		if(!params.size) params.size = 'small';

		this.size = ko.observable('warrior--' + params.size);

	};

	return Warrior;
	
});