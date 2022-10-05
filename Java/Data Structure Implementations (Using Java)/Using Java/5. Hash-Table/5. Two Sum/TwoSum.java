import java.util.*;

class TwoSum {

    // Time complexity: O(n)
    private static int[] findTwoSum(int[] arr, int k) {

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            int diff = k - arr[i];

            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), i };
            } else {
                map.put(arr[i], i);

                //System.out.println(map);
            }
        }

        return new int[] {};
    }

    public static void main(String[] args) {
		int[] arr = {2, 7, 11, 15};
		int k = 9;

		System.out.println(Arrays.toString(findTwoSum(arr, k)));
	}
}
