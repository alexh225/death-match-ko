define([
	'models/appModel',
	'knockout'
], function(AppModel, ko) {

	var appModel;

	beforeEach(function(){
		appModel = new AppModel();
	});

	afterEach(function(){
		appModel = null;
	});

	describe('the appModel', function(){

		it('should have an observable array of warriors', function(){
			expect(ko.isObservable(appModel.warriors)).toBe(true);
			expect(Array.isArray(appModel.warriors())).toBe(true);
		});

		it('should make only the wins property of incoming warrior objects observable', function(){
			appModel.warriors.push({
				id: 1234,
				name: 'Foo',
				wins: 22,
				images: 'bar'
			});
			var warrior = appModel.warriors()[0];
			expect(ko.isObservable(warrior.wins)).toBe(true, 'wins');
			expect(ko.isObservable(warrior.id)).toBe(false, 'id');
			expect(ko.isObservable(warrior.name)).toBe(false, 'name');
			expect(ko.isObservable(warrior.image)).toBe(false, 'image');
		});

	});
	
});