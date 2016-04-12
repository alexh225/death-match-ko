define([
	'knockout',
	'helpers/componentHelper'
], function(ko, componentHelper){
	
	var componentConfig = {
		'Header': {
			template: { require: 'text!components/header/header.html' }
		},
		'WarriorsList': {
			template: { require: 'text!components/warriorsList/warriorsList.html' }
		},
		'Leaderboard': {
			template: { require: 'text!components/leaderboard/leaderboard.html' }
		},
		'Matchup': {
			template: { require: 'text!components/matchup/matchup.html' }
		},
		'Warrior': {
			template: { require: 'text!components/warrior/warrior.html' },
			viewModel: { require: 'components/warrior/warrior' }
		},
		'WarriorDetail': {
			template: { require: 'text!components/warriorDetail/warriorDetail.html' }
		}
	};

	new componentHelper().registerComponents(componentConfig);

	ko.applyBindings();

});