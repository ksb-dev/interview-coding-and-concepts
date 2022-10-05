/*

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]

Explanation:
Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

*/

import java.util.*;

public class RunningSum {
	public static int[] runningSum(int[] arr) {
		int sum = arr[0];

		for(int i = 1; i < arr.length; i++) {
			sum += arr[i];

			arr[i] = sum;
		}

		return arr;
	}

	public static void main(String[] args) {
		//int[] arr = {1, 2, 3, 4};
		int[] arr = {1, 1, 1, 1, 1};

		System.out.println(Arrays.toString(runningSum(arr)));
	}
}