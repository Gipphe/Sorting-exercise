define(['sorts/polyfills'], function() {
	function insertionSort(arr) {
		if (!arr || arr.length === 1) {
			return;
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
	}
	return insertionSort;
});