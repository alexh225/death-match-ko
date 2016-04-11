define([
	'knockout'
], function(ko){
	
	ko.components.register('Header', {
		template: { require: 'text!app/components/header/header.html' }
	});

	ko.components.register('WarriorsList', {
		template: { require: 'text!app/components/warriorsList/warriorsList.html' }
	});

	ko.components.register('Leaderboard', {
		template: { require: 'text!app/components/leaderboard/leaderboard.html' }
	});

	ko.components.register('Matchup', {
		template: { require: 'text!app/components/matchup/matchup.html' }
	});

	ko.components.register('Warrior', {
		template: { require: 'text!app/components/warrior/warrior.html' }
	});

	ko.components.register('WarriorDetail', {
		template: { require: 'text!app/components/warriorDetail/warriorDetail.html' }
	});

	ko.applyBindings();

});