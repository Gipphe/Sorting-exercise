define(['sorts/selectionSort'], function(selectionSort) {
	describe('selectionSort', function() {
		it('should sort array', function() {
			var input = [2,6,4,4,7,8,1,2,235,456,22];
			var expected = [1,2,2,4,4,6,7,8,22,235,456];

			var actual = selectionSort(input);
			expect(actual).toBe(expected);
		});
	});
});