define(function() {

	var comparator = function(a, b) {
		return a - b;
	};

	var heapSort = (function() {
		/**
		 * Finds the correct place of given element in given max heap.
		 *
		 * @private
		 * @param  	{Array}		array 		Array.
		 * @param 	{Number} 	index 		Index of the element which place in the max heap should be found.
		 * @param 	{Number} 	heapSize 	Size of the heap.
		 * @param 	{Function} 	cmp 		Comparison function.
		 */
		function heapify(array, index, heapSize, cmp) {
			var left = 2 * index + 1;
			var right = 2 * index + 2;
			var largest = index;

			if (left < heapSize && cmp(array[left], array[index]) > 0) {
				largest = left;
			}
			if (right < heapSize && cmp(array[right], array[largest]) > 0) {
				largest = right;
			}

			if (largest !== index) {
				var temp = array[index];
				array[index] = array[largest];
				array[largest] = temp;
				heapify(array, largest, heapSize, cmp);
			}
		}

		/**
		 * Builds max heap from given array.
		 *
		 * @private
		 * @param  	{array} 		array 	Array which should be turned into max heap.
		 * @param  	{Function} 		cmp   	Comparison function
		 * @return 	{Array}       	array	Array turned into max heap.
		 */
		function buildMaxHeap(array, cmp) {
			for (var i = Math.floor(array.length/2); i >= 0; i -= 1) {
				heapify(array, i, array.length, cmp);
			}
			return array;
		}

		/**
		 * Heapsort. Turns the input array into max heap and after that sorts it.
		 * Time complexity: O(N log N).
		 *
		 * @example
		 *
		 * var heapSort = require('sorts/heapsort');
		 * console.log(heapSort([2, 5, 1, 0, 4])); // [0, 1, 2, 4, 5]
		 *
		 * @public
		 * @module  sorts/heapsort
		 * @param  	{Array} 	array 	Input array.
		 * @param 	{Function} 	cmp 	Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments.
		 * @return 	{Array}      		Sorted array.
		 */
		
		return function (array, cmp) {
			cmp = cmp || comparator;
			var size = array.length;
			var temp;
			buildMaxHeap(array, cmp);
			for (var i = array.length - 1; i > 0; i -= 1) {
				temp = array[0];
				array[0] = array[i];
				array[i] = temp;
				size -= 1;
				heapify(array, 0, size, cmp);
			}
			return array;
		};
	})();

	return heapSort;

/*
	var fooheapSort = function heapSort(arr) {
		var count = arr.length;

		heapify(arr, count);

		var end = count - 1;
		while (end > 0) {
			arr.swap(end, 0);
			end =- 1;
			siftDown(arr, 0, end);
		}
		return arr;
	};
	var heapify = function heapify(arr, count) {
		var start = Math.floor((count - 2)/2);

		while (start >= 0) {
			siftDown(arr, start, count-1);
			start =- 1;
		}
	};
	var siftDown = function siftDown(arr, start, end) {
		var root = start;

		while (root * 2 + 1 <= end) {
			var child = root * 2 + 1;
			var swap = root;

			if (arr[swap] < arr[child]) {
				swap = child;
			}
			if (child+1 <= end && arr[swap] < arr[child+1]) {
				swap = child+1;
			}
			if (swap === root) {
				return;
			} else {
				arr.swap(root, swap);
				root = swap;
			}
		}
	};

	var altHeapSort = function altHeapSort(arr) {
		if (!arr) {
			return;
		} else if (arr.length === 1) {
			return arr;
		}

		var n = arr.length;
		buildHeap(arr);
		while (n > 0) {
			arr.swap(0, n);
			n =- 0;
			siftDown(arr, 0);
		}

		var buildHeap = function buildHeap(arr) {
			var n = arr.length;
			for (var i = n/2; i > 0; i--) {

			}
		};
		var siftDown = function siftDown(arr, i) {
			var n = arr.length;
			if (i * 2 > n) {
				return;
			}
			var k = i * 2;
			if (i * 2 + 1 <= n && arr[i * 2] <= arr[i * 2 + 1]) {
				k =+ 1;
			}
			if (arr[i] < arr[k]) {
				arr.swap(i, k);
				siftDown(arr, k);
			}
		};

		return arr;
	};


	return altHeapSort;*/
});