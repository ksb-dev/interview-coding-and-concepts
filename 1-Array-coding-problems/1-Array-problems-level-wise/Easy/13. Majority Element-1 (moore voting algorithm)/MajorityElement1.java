/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than n / 2 times.
You may assume that the majority element always exists in the array.

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

import java.util.*;

public class MajorityElement1 {
	public static int majorityElement(int[] arr) {
		if(arr.length == 1) return arr[0];

		HashMap<Integer, Integer> map = new HashMap<>();
		int half = arr.length / 2;
		int frequency = 0;
		int element = 0;

		for(int i = 0; i < arr.length; i++) {
			if(map.containsKey(arr[i])) {
				frequency = map.get(arr[i]) + 1;

				if(frequency > half) {
					return arr[i];
				}
				else {
					map.put(arr[i], frequency);
				}
			}
			else {
				map.put(arr[i], 1);
			}
		}
		return element;

		/*int count = 0;
		int element = 0;

		for(int i = 0; i < arr.length; i++) {
			if(count == 0) element = arr[i];

			if(arr[i] == element) count++;
			else count--;
		}
		return element;*/
	}

	public static void main(String[] args) {
		//int[] arr = {2, 2, 1, 1, 1, 2, 2};
		int[] arr = {3, 3, 4, 2, 4, 4, 2, 4, 4};

		System.out.println(majorityElement(arr));
	}
}