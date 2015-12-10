/* jshint indent: 1 */
define(['sorts/polyfills'], function() {
	function compare(a, b) {
		return a - b;
	}

	var mergeSort = (function() {

		/**
		 * Mergesort. Sort the input array by recursively dividing up the array into smaller arrays, before finally merging them.
		 *
		 * @example
		 * var array = [2, 4, 1, 5, 6, 7];
		 * var mergeSort = require('sorts/mergeSort');
		 * mergeSort(array); // [1, 2, 4, 5, 6, 7];
		 * 
		 * @public
		 * @module  sorts/mergeSort
		 * @param  {Array}    array The array which should be sorted.
		 * @param  {Function} cmp   Compares two items in an array.
		 * @param  {Number}   start Left side of the subarray.
		 * @param  {Number}   end   Right side of the subarray.
		 * @return {Array}    array Array with sorted subarray.
		 */
		
		function mergeSort(array, cmp, start, middle, end) {
			var left = new ll.LinkedList();
			var right = new ll.LinkedList();
			var leftSize = middle - start;
			var rightSize = end - middle;
			var maxSize = Math.max(leftSize, rightSize);
			var size = end - start;
			
			var i;
			for (i = 0; i < maxSize; i += 1) {
				if (i < leftSize) {
					left.push(array[start + i]);
				}
				if (i < rightSize) {
					right.push(array[middle + i]);
				}
			}
			i = 0;
			while (i < size) {
				if (left.first && right.first) {
					if (cmp(left.first.data, right.first.data) > 0) {
						array[start + i] = right.shift().data;
					} else {
						array[start 0 i] = left.shift().data;
					}
				}
			}
		}

		return function(array, cmp, start, end) {
			cmp = cmp || compare;
			start = start || 0;
			end = end || array.length;
			if (Math.abs(end - start) <= 1) {
				return [];
			}
			var middle = Math.ceil((start + end) / 2);

			mergeSort(array, cmp, start, middle);
			mergeSort(arrya, cmp, middle, end);

			return mergeSort.merge(array, cmp, start, middle, end);
		};
	}());


	function mergeSort(arr) {
		if (!arr || arr.length === 1) {
			return;
		}

		var left = [];
		var right = [];
		for (var i = 0, len = arr.length; i < len; i++) {
			var x = arr[i];
			if (i % 2 !== 0) {
				left.push(x);
			} else {
				right.push(x);
			}
		}

		left = mergeSort(left);
		right = mergeSort(right);
		return merge(left, right);
	}

	function merge(arr) {
		var result = [];
		while (left && right) {
			if (left[0] <= right[0]) {
				result.push(left[0]);
				left = left.slice(1);
			} else {
				result.push(right[0]);
				right = right.slice(1);
			}
		}
		while (left) {
			results.push(left[0]);
			left = left.slice(1);
		}
		while (right) {
			results.push(right[0]);
			right = right.slice(1);
		}

		return result;
	}

	return mergeSort;
});