/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n, representing the number of elements in nums1 and nums2
respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored
inside the array nums1. To accommodate this, nums1 has a length of m + n, where the
first m elements denote the elements that should be merged, and the last n elements
are set to 0 and should be ignored. nums2 has a length of n.


Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Explanation:

The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

import java.util.*;

public class MergeSortedArrays {
	public static void merge(int[] arr1, int[] arr2, int m, int n) {
		int lastIndex = m + n - 1;

		int p1 = m - 1;
		int p2 = n - 1;


		while(p1 >= 0 && p2 >= 0) {
			if(arr1[p1] > arr2[p2]) {
				arr1[lastIndex] = arr1[p1];
				p1--;
			}
			else {
				arr1[lastIndex] = arr2[p2];
				p2--;
			}
			lastIndex--;
		}

		while(p1 >= 0) {
			arr1[lastIndex] = arr1[p1];
			p1--;
			lastIndex--;
		}

		while(p2 >= 0) {
			arr1[lastIndex] = arr2[p2];
			p2--;
			lastIndex--;
		}

		System.out.println(Arrays.toString(arr1));
	}

	public static void main(String[] args) {
		int[] arr1 = {1, 2, 3, 0, 0, 0};
		int[] arr2 = {2, 5, 6};

		int m = 3;
		int n = 3;

	    merge(arr1, arr2, m, n);
	}
}