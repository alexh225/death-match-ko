define([
	'knockout',
	'lodash/sampleSize',
	'socket.io'
], function(ko, _sampleSize, io){
	
    var socket = io.connect('http://localhost:3000');

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
		this.emitSelection({ id: this.opponent1().id });
		this.getOpponents();
	};

	Matchup.prototype.selectOpponent2 = function() {
		this.emitSelection({ id: this.opponent2().id });
		this.getOpponents();
	};

	Matchup.prototype.emitSelection = function(payload) {
		socket.emit('warriorSelection', payload);
	};

	return Matchup;

});