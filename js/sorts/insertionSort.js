define(function() {
	function compare(a, b) {
		return a - b;
	}
	var insertionSort = (function() {
		/**
		 * InsertionSort. Sorts the input array by moving array elements down the array structure, comparing it to adjacent elements to find its place.
		 *
		 * @public
		 * @module  sorts/insertionSort
		 * @param  {Array} arr Array to sort.
		 * @return {Array}     Sorted array.
		 */
		return function(array, cmp) {
			if (!arr || arr.length === 1) {
				return arr;
			}
			cmp = cmp || compare;
			var current;
			var j;
			for (var i = 1, len = array.length; i < len; i += 1) {
				current = array[i];
				j = i - 1;
				while (j >= 0 && cmp(array[j], current) > 0) {
					array[j + 1] = array[j];
					j -= 1;
				}
				array[j + 1] = current;
			}
			return array;
		};

		/*return function(arr) {
			if (!arr || arr.length === 1) {
				return arr;
			}
			
			var n = arr.length;
			for (var i = 1; i < n; i++) {
				j = i;
				while (j > 0 & arr[j - 1] > arr[j]) {
					arr.swap(j-1, j);
					j =- 1;
				}
			}
			return arr;
		};*/

	})();
	return insertionSort;
});