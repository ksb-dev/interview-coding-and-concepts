// 1. If array length < 2 return
// 2. Divide array into two halves
// 3. Create left array with length middle and copy array elements upto middle index
// 4. Create right array with length [a.length - middle] and copy remaining array elemnts
// 5. Sort left and right array recirsively;
// 6. Merge sorted arrays

import java.util.*;

public class MergeSort {

	private static int[] merge(int[] left, int[] right, int[] result, int m) {
		int i = 0, j = 0, k = 0, count = 0;

		while(i < left.length && j < right.length) {

			if(left[i] <= right[j])
			    result[k++] = left[i++];
			else {
			    result[k++] = right[j++];
			    count = count + (m - i);
			}
		}

		while(i < left.length)
		    result[k++] = left[i++];

		while(j < right.length)
		    result[k++] = right[j++];

		System.out.println(count);
		return result;
	}

	public static int[] mergeSort(int[] a) {

		if(a.length < 2) return a;

		int middle = (a.length / 2);

		int[] left = new int[middle];

		for(int i = 0; i < middle; i++)
			left[i] = a[i];

		int[] right = new int[a.length - middle];

		for(int i = middle; i < a.length; i++)
			right[i - middle] = a[i];

		mergeSort(left);
		mergeSort(right);

		return merge(left, right, a, middle);
	}

	public static void main(String[] args) {
		//int[] a = {4, 1, 0, 6, 8, 10};
		//int[] a = {2, 1};
		//int[] a = {1};
		int[] a = {2, 4, 1, 3, 5};

		System.out.println(Arrays.toString(mergeSort(a)));
	}
}