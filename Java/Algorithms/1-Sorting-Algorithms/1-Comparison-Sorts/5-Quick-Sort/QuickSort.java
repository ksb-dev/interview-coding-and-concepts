import java.util.*;

public class QuickSort {
	public static void swap(int[] arr, int index1, int index2) {

		int temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	public static int partition(int[] arr, int start, int end, String s) {

		System.out.println("start --> " + start + " end --> " + end);

		int pivot = arr[end];
		int boundary = start - 1;

		for(int i = start; i <= end; i++) {

			System.out.println("pivot --> " + pivot + " arr[i] --> " + arr[i]);

			if(arr[i] <= pivot) {
				boundary++;

				swap(arr, i, boundary);
			}

			System.out.println(s + " " + Arrays.toString(arr));
			System.out.println();
		}



		return boundary;
	}

	public static int[] quickSort(int[] arr, int start, int end, String s) {
		if(start >= end) {
			return arr;
		}

		int boundary = partition(arr, start, end, s);

		System.out.println();
		System.out.println("start --> " + start + " end --> " + end + " Boundary --> " + boundary);
		System.out.println();

		quickSort(arr, start, boundary - 1, "left : ");
		quickSort(arr, boundary + 1, end, "right : ");

		return arr;
	}

	public static void main(String[] args) {

		int[] arr = {12, 5, 1, 6, 10, 8, 3, 7, 4};
		int start = 0;
		int end = arr.length - 1;
		String s = "left : ";

		System.out.println(Arrays.toString(arr) + " \n ");

		int[] sortedArray = quickSort(arr, start, end, s);

		System.out.println(Arrays.toString(sortedArray));
	}
}