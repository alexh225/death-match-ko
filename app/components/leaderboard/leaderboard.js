define([
	'knockout',
	'lodash/sortBy'
], function(ko, _sortBy){

	var Leaderboard = function(params) {
		
		this.sortedWarriors = ko.pureComputed(function(){
			return _sortBy(params.appModel.warriors(), function(warrior){
				return warrior.wins();
			}).reverse();
		}, this);

	};

	return Leaderboard;

});