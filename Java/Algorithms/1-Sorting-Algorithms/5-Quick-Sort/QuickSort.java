import java.util.*;

public class QuickSort {
	public static void swap(int[] arr, int index1, int index2) {

		int temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	public static int partition(int[] arr, int start, int end) {

		int pivot = arr[end];
		int boundary = start - 1;

		for(int i = start; i <= end; i++) {
			if(arr[i] <= pivot) {
				boundary++;

				swap(arr, i, boundary);
			}
		}
		return boundary;
	}

	public static int[] quickSort(int[] arr, int start, int end) {
		if(start >= end) {
			return arr;
		}

		int boundary = partition(arr, start, end);

		quickSort(arr, start, boundary - 1);
		quickSort(arr, boundary + 1, end);

		return arr;
	}

	public static void main(String[] args) {

		int[] arr = {12, 5, 1, 6, 10, 8, 3, 2, 4};
		int start = 0;
		int end = arr.length - 1;

		int[] sortedArray = quickSort(arr, start, end);

		System.out.println(Arrays.toString(sortedArray));
	}
}