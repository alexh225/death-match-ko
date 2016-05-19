define([
    'components/matchup/matchup',
    'knockout'
], function(Matchup, ko) {

    var matchup,
        mockParams;

    beforeEach(function() {
        mockParams = {
            appModel: {
                warriors: ko.observableArray([])
            }
        };
        matchup = new Matchup(mockParams);
    });

    afterEach(function() {
        matchup = null;
        mockParams = null;
    });

    describe('the matchup viewmodel', function() {

        it('should not display opponents when less than 2 warriors exist in the model', function() {

            // test with no warriors
            expect(matchup.shouldShowOpponents()).toBe(false, 'no warriors');

            // test with 1 warrior
            mockParams.appModel.warriors.push({});
            expect(matchup.shouldShowOpponents()).toBe(false, '1 warrior');

            // test with 2 warriors
            mockParams.appModel.warriors.push({});
            expect(matchup.shouldShowOpponents()).toBe(true, '2 warriors');

            // test with 3 warriors
            mockParams.appModel.warriors.push({});
            expect(matchup.shouldShowOpponents()).toBe(true, '3 warriors');

        });

        it('should choose 2 unique warriors as opponents', function() {

            var warrior1 = { id: 121, wins: ko.observable(20) },
                warrior2 = { id: 122, wins: ko.observable(21) },
                warrior3 = { id: 123, wins: ko.observable(22) },
                warrior4 = { id: 124, wins: ko.observable(23) };

            mockParams.appModel.warriors.push(warrior1);
            mockParams.appModel.warriors.push(warrior2);
            mockParams.appModel.warriors.push(warrior3);
            mockParams.appModel.warriors.push(warrior4);

            matchup.getOpponents();

            expect(matchup.opponent1()).not.toBe(null);
            expect(matchup.opponent2()).not.toBe(null);
            expect(matchup.opponent1().id).not.toBe(matchup.opponent2().id);

        });

        it('should emit selection event and select new opponents when opponent1 is selected', function() {
            spyOn(matchup, 'getOpponents').and.callThrough();
            spyOn(matchup, 'emitSelection').and.callThrough();

            var warrior1 = { id: 121, wins: ko.observable(20) };
            var warrior2 = { id: 122, wins: ko.observable(21) };

            matchup.opponent1(warrior1);
            matchup.opponent2(warrior2);

            matchup.selectOpponent1();

            expect(matchup.getOpponents).toHaveBeenCalled();
            expect(matchup.emitSelection).toHaveBeenCalledWith({ id: 121 });
        });

        it('should emit selection event and select new opponents when opponent2 is selected', function() {
            spyOn(matchup, 'getOpponents').and.callThrough();
            spyOn(matchup, 'emitSelection').and.callThrough();

            var warrior1 = { id: 121, wins: ko.observable(20) };
            var warrior2 = { id: 122, wins: ko.observable(21) };

            matchup.opponent1(warrior1);
            matchup.opponent2(warrior2);

            matchup.selectOpponent2();

            expect(matchup.getOpponents).toHaveBeenCalled();
            expect(matchup.emitSelection).toHaveBeenCalledWith({ id: 122 });
        });

    });

});