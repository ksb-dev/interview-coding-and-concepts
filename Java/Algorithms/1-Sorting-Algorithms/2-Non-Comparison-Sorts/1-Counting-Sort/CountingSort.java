/*

Strengths --> Linear time. Counting sort runs in O(n)O(n) time, making it asymptotically faster than comparison-based
              sorting algorithms like quicksort or merge sort.

Weaknesses --> Restricted inputs. Counting sort only works when the range of potential items in the input is known ahead of time.
               Space cost. If the range of potential values is big, then counting sort requires a lot of space
               (perhaps more than O(n)O(n)).

*/

import java.util.*;

public class CountingSort {
	public static int[] countingSort(int[] arr, int max) {
		int[] temp = new int[max + 1];

		for(int item : arr) {
			temp[item]++;
		}

		//System.out.println(Arrays.toString(temp));
		int k = 0;

		for(int i = 0; i < temp.length; i++) {
			for(int j = 0; j < temp[i]; j++) {
				arr[k++] = i;
			}
		}
		return arr;
	}

	public static void main(String[] args) {
		int[] arr = {9, 4, 8, 2, 8, 1, 4, 5, 7, 9};
		int max = 9;

		int[] sortedArray = countingSort(arr, max);

		System.out.println(Arrays.toString(sortedArray));
	}
}