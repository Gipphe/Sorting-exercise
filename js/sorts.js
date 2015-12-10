define(function() {
	var sorts;
	sorts = require('sorts/core');
	sorts.bubbleSort = require('sorts/bubbleSort');
	sorts.cocktailShakerSort = require('sorts/cocktailShakerSort');
	sorts.heapSort = require('sorts/heapSort');
	sorts.insertionSort = require('sorts/insertionSort');
	sorts.mergeSort = require('sorts/mergeSort');
	sorts.selectionSort = require('sorts/selectionSort');
	return sorts;
});