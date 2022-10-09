/*

1. Set the first element as minIndex.

2. Compare minimum with the second element. If the second element is smaller than minimum,
   assign the second element as minimum.

3. This process goes on utill the last element.

4. After each iteration, index that we have assigned as minIndex at the start of iteration &
   minIndex that we got at the end of iteration were swapped.

5. For each iteration, indexing starts from the first unsorted element.
   Step 1 to 4 are repeated until all the elements are placed at their correct positions.

*/

import java.util.*;

public class SelectionSort {
	public static int[] selectionSort(int[] arr) {

		for(int i = 0; i < arr.length - 1; i++) {
			int minIndex = i;

			for(int j = i + 1; j < arr.length; j++) {
				if(arr[j] < arr[minIndex]) {
					minIndex = j;
				}
			}

			int temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}

		return arr;
	}

	public static void main(String[] args) {
		int[] arr = {10, 3, 6, 2, 4, 8};

		int[] sortedArray = selectionSort(arr);

		System.out.println(Arrays.toString(sortedArray));
	}
}