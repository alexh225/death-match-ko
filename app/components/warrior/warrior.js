define([
	'knockout'
], function(ko){

	var Warrior = function(params){

		var params = params || {};

		if(!params.size) params.size = 'small';
		if(!params.image) params.image = '';

		this.size = ko.observable('warrior--' + params.size);
		this.image = ko.observable(params.image);

	};

	return Warrior;
	
});