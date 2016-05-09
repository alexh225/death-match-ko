define([
	'knockout',
	'lodash/sampleSize'
], function(ko, _sampleSize){
	
	var Matchup = function(params) {

		this.availableWarriors = params.appModel.warriors;

		this.oponent1 = ko.observable();
		this.oponent2 = ko.observable();

		this.shouldShowOponents = ko.pureComputed(function(){
			return (this.availableWarriors().length >= 2);
		}, this);

		this.getOponents();

	};

	Matchup.prototype.getOponents = function() {
		var oponents = _sampleSize(this.availableWarriors(), 2);
		this.oponent1(oponents[0]);
		this.oponent2(oponents[1]);
	};

	return Matchup;

});