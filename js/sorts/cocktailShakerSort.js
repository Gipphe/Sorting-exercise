define(['sorts/polyfill'], function() {
	function cocktailShakerSort(arr) {
		var lo = 0;
		var hi = arr.length - 1;
		var mov = lo;
		while (lo < hi) {
			for (var i = hi; i > lo + 1; i--) {
				if (arr[i-1] > arr[i]) {
					arr.swap(i-1, i);
					mov = i;
				}
			}
			lo = mov;
			for (i = lo; i < hi-1; i++) {
				if (arr[i] > arr[i+1]) {
					arr.swap(i, i+1);
					mov = i;
				}
			}
			hi = mov;
		}
		return arr;
	}
})