define(['sorts/polyfills'], function() {
	function selectionSort(arr) {
		if (!arr || arr.length === 1) {
			return;
		}
		var n = arr.length;
		for (var i = 1; i < n; i++) {
			var min = i;
			for (var j = i; j < n; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
			}
			arr.swap(i, min);
		}
		return arr;
	}
	return selectionSort;
});