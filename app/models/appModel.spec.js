define([
	'models/appModel',
	'knockout'
], function(AppModel, ko) {

	var appModel;

	describe('the appModel', function(){

		beforeEach(function(){
			appModel = new AppModel();
		});

		afterEach(function(){
			appModel = null;
		});

		it('should have an observable array of warriors', function(){
			expect(ko.isObservable(appModel.warriors)).toBe(true);
			expect(Array.isArray(appModel.warriors())).toBe(true);
		});

	});
	
});