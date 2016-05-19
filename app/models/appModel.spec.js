define([
    'models/appModel',
    'knockout'
], function(AppModel, ko) {

    var appModel;

    beforeEach(function() {
        appModel = new AppModel();
    });

    afterEach(function() {
        appModel = null;
    });

    describe('the appModel', function() {

        it('should have an observable array of warriors', function() {
            expect(ko.isObservable(appModel.warriors)).toBe(true);
            expect(Array.isArray(appModel.warriors())).toBe(true);
        });

        it('should make only the wins property of incoming warrior objects observable', function() {

            var mockData = [
                { id: 123, name: 'foo', image: 'foo', wins: 12 }
            ];

            // since handleAllWarriorsDataEvent is not public, we have to call it from 
            // the prototype and provide the context (appModel) and the argument (mockData)
            AppModel.prototype.handleAllWarriorsDataEvent.call(appModel, mockData);

            var warrior = appModel.warriors()[0];

            expect(ko.isObservable(warrior.wins)).toBe(true, 'wins');
            expect(ko.isObservable(warrior.id)).toBe(false, 'id');
            expect(ko.isObservable(warrior.name)).toBe(false, 'name');
            expect(ko.isObservable(warrior.image)).toBe(false, 'image');

        });

        describe('allWarriorsData event', function() {

            var mockData;

            beforeEach(function() {
                mockData = [
                    { id: 123, name: 'foo', image: 'foo', wins: 12 },
                    { id: 124, name: 'bar', image: 'bar', wins: 22 },
                    { id: 125, name: 'baz', image: 'baz', wins: 32 }
                ];

                // since handleAllWarriorsDataEvent is not public, we have to call it from 
                // the prototype and provide the context (appModel) and the argument (mockData)
                AppModel.prototype.handleAllWarriorsDataEvent.call(appModel, mockData);
            });

            afterEach(function() {
                mockData = null;
            });

            it('should handle new incoming data for the allWarriorsData event', function() {

                var warriors = appModel.warriors();

                expect(warriors[0].id).toBe(123);
                expect(warriors[0].name).toBe('foo');
                expect(warriors[0].image).toBe('foo');
                expect(warriors[0].wins()).toBe(12);

                expect(warriors[1].id).toBe(124);
                expect(warriors[1].name).toBe('bar');
                expect(warriors[1].image).toBe('bar');
                expect(warriors[1].wins()).toBe(22);

                expect(warriors[2].id).toBe(125);
                expect(warriors[2].name).toBe('baz');
                expect(warriors[2].image).toBe('baz');
                expect(warriors[2].wins()).toBe(32);

            });

            it('should handle updated data for the allWarriorsData event', function() {

                var updatedData = [
                    { id: 123, name: 'foo', image: 'foo', wins: 12 },
                    { id: 124, name: 'bar', image: 'bar', wins: 52 }, // only changing win count on this item
                    { id: 125, name: 'baz', image: 'baz', wins: 32 }
                ];

                // call the handleAllWarriorsDataEvent method after there are already warriors in the 
                // model's warriors array
                AppModel.prototype.handleAllWarriorsDataEvent.call(appModel, updatedData);

                expect(appModel.warriors()[1].wins()).toBe(52);

            });

        });

    });

});