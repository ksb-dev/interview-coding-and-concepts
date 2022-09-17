/*

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
More formally, if all the permutations of the array are sorted in one container according to their lexicographical
order, then the next permutation of that array is the permutation that follows it in the sorted container.
If such arrangement is not possible, the array must be rearranged as the lowest possible order
(i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical
larger rearrangement.

Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Input: nums = [1,2,3]
Output: [1,3,2]


Input: nums = [3,2,1]
Output: [1,2,3]


Input: nums = [1,1,5]
Output: [1,5,1]

*/

import java.util.*;

public class NextPermutation {
	public static void swap(int[] arr, int p, int q) {
		int temp = arr[p];
		arr[p] = arr[q];
		arr[q] = temp;
	}

	public static void reverse(int[] arr, int p, int q) {
		while(p < q) {
			swap(arr, p, q);
			p++;
			q--;
		}
	}

	public static int[] nextPermutation(int[] arr) {
		int p = -1;

		// 1. Scan from right to left, find the first element that is less than its previous one.

		for (int i = arr.length - 1; i > 0; i--) {
			if (arr[i] > arr[i - 1]) {
				p = i - 1;

				break;
			}
		}

		// 2. If not found reverse

		if (p == -1) {
			reverse(arr, 0, arr.length - 1);
			return arr;
        }

        // 3. Scan from right to left (not beyond p + 1), find the first element that is greater than p.

        int q = arr.length - 1;

        for(int i = q; i >= p+1; i--) {
			if(arr[i] > arr[p]) {
				q = i;

				break;
			}
		}

		// 4. Swap p and q

		swap(arr, p, q);

		// 5. Reverse remaining elements from p + 1;

		reverse(arr, p+1, arr.length -1);

		return arr;
	}

	public static void main(String[] args) {
		//int[] arr = {1, 2, 3};
		int[] arr = {4, 5, 6, 3, 2, 1};

		System.out.println(Arrays.toString(nextPermutation(arr)));
	}
}