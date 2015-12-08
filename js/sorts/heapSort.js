define(['sorts/polyfills'], function() {
	function heapSort(arr) {
		var count = arr.length;

		heapify(arr, count);

		var end = count - 1;
		while (end > 0) {
			arr.swap(end, 0);
			end =- 1;
			siftDown(arr, 0, end);
		}
		return arr;
	}
	function heapify(arr, count) {
		var start = Math.floor((count - 2)/2);

		while (start >= 0) {
			siftDown(arr, start, count-1);
			start =- 1;
		}
	}
	function siftDown(arr, start, end) {
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
				return
			} else {
				arr.swap(root, swap);
				root = swap;
			}
		}
	}

	function altHeapSort(arr) {
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

		function buildHeap(arr) {
			var n = arr.length;
			for (var i = n/2; i > 0; i--) {

			}
		}
		function siftDown(arr, i) {
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
		}

		return arr;
	}


	return altHeapSort;
});