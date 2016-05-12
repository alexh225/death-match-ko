define([
	'components/leaderboard/leaderboard',
	'knockout'
], function(Leaderboard, ko){

	var leaderboard,
		mockParams;

	beforeEach(function(){
		mockParams = {
			appModel: {
				warriors: ko.observableArray([])
			}
		};
		leaderboard = new Leaderboard(mockParams);
	});

	afterEach(function(){
		leaderboard = null;
		mockParams = null;
	});

	describe('the leaderboard viewmodel', function(){

		it('should sort the warriors decending by wins', function(){
			
			var warrior1 = { id: 1, wins: ko.observable(10) };
			var warrior2 = { id: 2, wins: ko.observable(25) };
			var warrior3 = { id: 3, wins: ko.observable(15) };
			var warrior4 = { id: 4, wins: ko.observable(20) };

			mockParams.appModel.warriors([ warrior1, warrior2, warrior3, warrior4 ]);

			var sortedWarriors = leaderboard.sortedWarriors();

			expect(sortedWarriors[0].id).toBe(2);
			expect(sortedWarriors[1].id).toBe(4);
			expect(sortedWarriors[2].id).toBe(3);
			expect(sortedWarriors[3].id).toBe(1);

		});

	});

});