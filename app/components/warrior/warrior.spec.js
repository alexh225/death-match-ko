define([
	'components/warrior/warrior',
	'knockout'
], function(Warrior, ko){

	describe('The Warrior component viewmodel', function(){

		it('should default the size to small if no parameter is provided', function(){
			var warrior = new Warrior();
			expect(warrior.size()).toBe('warrior--small');
		});

		it('should set the size properly if the parameter is provided', function(){
			var warrior = new Warrior({ size: ko.observable('foo') });
			expect(warrior.size()).toBe('warrior--foo');
		});

		it('should default the image to empty string if no parameter is provided', function(){
			var warrior = new Warrior();
			expect(warrior.image).toBe('');
		});

		it('should set the image properly if the parameter is provided', function(){
			var warrior = new Warrior({ image: 'foo' });
			expect(warrior.image).toBe('foo');
		});

	});

});
