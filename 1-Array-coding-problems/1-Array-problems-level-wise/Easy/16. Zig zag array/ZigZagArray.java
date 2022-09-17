/*

Given an array of DISTINCT elements, rearrange the elements of array in zig-zag fashion in O(n) time.
The converted array should be in form a < b > c < d > e < f.

Input: arr[] = {4, 3, 7, 8, 6, 2, 1}
Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

*/

import java.util.*;

public class ZigZagArray {
	public static int[] getZigZag(int[] arr) {
		boolean flag = true;

		for(int i = 0; i < arr.length - 1; i++) {
			if(flag == true) {
				if(arr[i] > arr[i+1]) {
					int temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
			}
			else {
				if(arr[i] < arr[i+1]) {
					int temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
			}
			flag = !flag;
		}
		return arr;
	}

	public static void main(String[] args) {
		//int[] arr = {4, 3, 7, 8, 6, 2, 1};
		int[] arr = {4, 3, 2, 1};

		System.out.println(Arrays.toString(getZigZag(arr)));
	}
}