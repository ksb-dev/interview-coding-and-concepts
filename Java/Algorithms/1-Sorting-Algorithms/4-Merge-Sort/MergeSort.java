// Dividing --> O(log n)
// Merging --> O(n);

// Time Complexity --> O(n log n)

// Space Complexity --> O(n)

import java.util.*;

public class MergeSort {

	public static void merge(int[] arr, int[] left, int[] right) {
		int i = 0, j = 0, k = 0;

		while(i < left.length && j < right.length) {
			if(left[i] <= right[j]) {
				arr[k++] = left[i++];
			}
			else {
				arr[k++] = right[j++];
			}
		}

		while(i < left.length) {
			arr[k++] = left[i++];
		}

		while(j < right.length) {
			arr[k++] = right[j++];
		}
	}

	public static int[] mergeSort(int[] arr) {

		if(arr.length < 2) {
			return arr;
		}

		int middle = arr.length / 2;

		int[] left = new int[middle];

		for(int i = 0; i < middle; i++) {
			left[i] = arr[i];
		}

		int[] right = new int[arr.length - middle];

		for(int i = middle; i < arr.length; i++) {
			right[i - middle] = arr[i];
		}

		mergeSort(left);
		mergeSort(right);

		merge(arr, left, right);

		return arr;
	}

	public static void main(String[] args) {
		int[] arr = {12, 5, 1, 6, 10, 8, 3, 2, 4};

		int[] sortedArray = mergeSort(arr);

		System.out.println(Arrays.toString(sortedArray));
	}
}