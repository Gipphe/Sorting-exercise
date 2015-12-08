define(function() {
	var sorts;
	sorts = require('sorts/core');
	sorts.selectionSort = require('sorts/selectionSort');
	sorts.insertionSort = require('sorts/insertionSort');
	sorts.bubbleSort = require('sorts/bubbleSort');
	sorts.heapSort = require('sorts/heapSort');
	sorts.cocktailShakerSort = require('sorts/cocktailShakerSort');
	sorts.mergeSort = require('sorts/mergeSort');
	return sorts;
});