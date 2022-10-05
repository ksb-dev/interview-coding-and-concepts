/*

Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may 
not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

import java.util.*;

public class TwoSum {

    // Brute Force O(n^2)
    /*
	public static int[] getIndices(int[] nums, int target) {

		int[] result = new int[2];

		for(int i = 0; i < nums.length; i++) {

			for(int j = i + 1; j < nums.length; j++) {

				if(nums[i] + nums[j] == target) {

					result[0] = i;
					result[1] = j;
				}
			}
		}

		return result;
    }
    */

    // Optimized O(n)

    public static int[] getIndices(int[] nums, int target) {
		int x = 0, y = 0;

		HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
		int[] result = new int[2];

		for(y = 0; y < nums.length; y++) {

			if(map.containsKey(target - nums[y])) {
				x = map.get(target - nums[y]);

				result[0] = x;
				result[1] = y;
			}

			map.put(nums[y],y);
		}

        return result;
	}

	public static void main(String[] args) {

		//int[] arr = {2, 7, 11, 15};
		//int target = 9;

		int[] arr = {3, 2, 4};
		int target = 6;

		int[] result = getIndices(arr, target);

		System.out.println(Arrays.toString(result));
	}
}