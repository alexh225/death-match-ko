define([
    'knockout'
], function(ko) {

    var ComponentHelper = function() {};

    ComponentHelper.prototype.registerComponents = function() {

        ko.components.register('Header', {
            template: require('text!app/components/header/header.html')
        });

        ko.components.register('WarriorsList', {
            template: require('text!app/components/warriorsList/warriorsList.html')
        });

        ko.components.register('Leaderboard', {
            template: require('text!app/components/leaderboard/leaderboard.html'),
            viewModel: require('app/components/leaderboard/leaderboard')
        });

        ko.components.register('Matchup', {
            template: require('text!app/components/matchup/matchup.html'),
            viewModel: require('app/components/matchup/matchup')
        });

        ko.components.register('Warrior', {
            template: require('text!app/components/warrior/warrior.html'),
            viewModel: require('app/components/warrior/warrior')
        });

        ko.components.register('WarriorDetail', {
            template: require('text!app/components/warriorDetail/warriorDetail.html')
        });
        
    };

    return ComponentHelper;

});