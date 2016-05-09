define([
	'knockout',
	'lodash/sampleSize'
], function(ko, _sampleSize){
	
	var Matchup = function(params) {

		this.availableWarriors = params.appModel.warriors;

		this.opponent1 = ko.observable();
		this.opponent2 = ko.observable();

		this.shouldShowOpponents = ko.pureComputed(function(){
			return (this.availableWarriors().length >= 2);
		}, this);

		this.getOpponents();

	};

	Matchup.prototype.getOpponents = function() {
		var opponents = _sampleSize(this.availableWarriors(), 2);
		this.opponent1(opponents[0]);
		this.opponent2(opponents[1]);
	};

	Matchup.prototype.selectOpponent1 = function() {
		var opponent = this.opponent1();
		opponent.wins( opponent.wins() + 1 );
		this.getOpponents();
	};

	Matchup.prototype.selectOpponent2 = function() {
		var opponent = this.opponent2();
		opponent.wins( opponent.wins() + 1 );
		this.getOpponents();
	};

	return Matchup;

});