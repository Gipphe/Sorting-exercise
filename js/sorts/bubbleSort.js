define(['sorts/polyfills'], function() {
	function bubbleSort(arr) {
		if (!arr || arr.length === 1) {
			return;
		}
		
		var n = arr.length;
		for (var i = 0, len1 = n; i < len1; i++) {
			for (var j = 0, len2 = n - i) {
				if (arr[j] > arr[j + 1]) {
					arr.swap(j, j+1);
				}
			}
		}
		return arr;
	}
	return bubbleSort;
});