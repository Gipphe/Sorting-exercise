define(['sorts/polyfills'], function() {
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