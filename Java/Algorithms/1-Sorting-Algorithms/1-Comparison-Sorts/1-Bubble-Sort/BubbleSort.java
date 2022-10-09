/*

1. Starting from the first index, compare the first and the second elements.

2. If the first element is greater than the second element, they are swapped.

3. The above process goes on until the last element.

4. Repeat 1 - 3 steps until all elements are sorted.

*/
import java.util.*;

public class BubbleSort {
	public static void swap(int[] arr, int index1, int index2) {
		int temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	public static int[] bubbleSort(int[] arr) {

		for(int i = 0; i < arr.length; i++) {

			for(int j = 0; j < arr.length - i - 1; j++) {

				if(arr[j] > arr[j + 1]) {

					swap(arr, j, j+1);
				}
			}
		}
		return arr;
	}

	public static void main(String[] args) {
		int[] arr = {10, 3, 6, 2, 4, 8};

		int[] sortedArray = bubbleSort(arr);

		System.out.println(Arrays.toString(sortedArray));
	}
}