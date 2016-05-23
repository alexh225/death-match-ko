define([
    'knockout',
    'lodash/sampleSize',
    'socket.io',
    'app/config',
    'helpers/events'
], function(ko, _sampleSize, io, config, events) {

    var socket = io.connect(config.socketUrl);

    var Matchup = function(params) {

        this.availableWarriors = params.appModel.warriors;

        this.opponent1 = ko.observable();
        this.opponent2 = ko.observable();

        this.shouldShowOpponents = ko.pureComputed(function() {
            return (this.availableWarriors().length >= 2);
        }, this);

        var instance = this;

        events.on('allWarriorsData:received', function() {
            if (instance.availableWarriors().length === 0) instance.getOpponents();
        });

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