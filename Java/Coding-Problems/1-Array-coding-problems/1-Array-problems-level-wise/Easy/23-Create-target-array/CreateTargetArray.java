/*

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

*/

import java.util.*;

class CreateTargetArray {
    public static int[] createTargetArray(int[] arr, int[] index) {

        List<Integer> list = new ArrayList<Integer>();

        for(int i = 0; i < arr.length; i++){
            list.add(index[i], arr[i]);
        }

        //System.out.println(list);

        int[] res = new int[arr.length];

        for(int i = 0; i < arr.length; i++){
            res[i] = list.get(i);
        }

        return res;
    }

    public static void main(String[] args) {
		int[] arr = {0, 1, 2, 3, 4};
		int[] index = {0, 1, 2, 2, 1};

		System.out.println(Arrays.toString(createTargetArray(arr, index)));
	}
}