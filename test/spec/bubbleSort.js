define(['sorts/bubbleSort'], function(bubbleSort) {
	describe('bubbleSort', function() {
		it('should sort array', function() {
			var input = [2,6,4,4,7,8,1,2,235,456,22];
			var expected = [1,2,2,4,4,6,7,8,22,235,456];

			var actual = bubbleSort(input);
			expect(actual).toBe(expected);
		});
	});
});