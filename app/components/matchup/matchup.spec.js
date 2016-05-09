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

        it('should not display oponents when less than 2 warriors exist in the model', function() {

            // test with no warriors
            expect(matchup.shouldShowOponents()).toBe(false, 'no warriors');

            // test with 1 warrior
            mockParams.appModel.warriors.push({});
            expect(matchup.shouldShowOponents()).toBe(false, '1 warrior');

            // test with 2 warriors
            mockParams.appModel.warriors.push({});
            expect(matchup.shouldShowOponents()).toBe(true, '2 warriors');

            // test with 3 warriors
            mockParams.appModel.warriors.push({});
            expect(matchup.shouldShowOponents()).toBe(true, '3 warriors');

        });

        it('should choose 2 unique warriors as oponents', function() {

            var warrior1 = { id: 121 },
                warrior2 = { id: 122 },
                warrior3 = { id: 123 },
                warrior4 = { id: 124 };

            mockParams.appModel.warriors.push(warrior1);
            mockParams.appModel.warriors.push(warrior2);
            mockParams.appModel.warriors.push(warrior3);
            mockParams.appModel.warriors.push(warrior4);

            matchup.getOponents();

            expect(matchup.oponent1()).not.toBe(null);
            expect(matchup.oponent2()).not.toBe(null);
            expect(matchup.oponent1().id).not.toBe(matchup.oponent2().id);

        });

    });

});