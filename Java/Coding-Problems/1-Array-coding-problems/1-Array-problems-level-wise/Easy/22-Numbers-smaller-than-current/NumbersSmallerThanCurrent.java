import java.util.*;

class NumbersSmallerThanCurrent {
    public static int[] bruteForce(int[] nums) {
        int[] temp = new int[nums.length];

        for(int i = 0; i < nums.length; i++) {

            int count = 0;

            for(int j = 0; j < nums.length; j++) {
                if(nums[i] > nums[j]) {
                    count++;
                }
            }
            temp[i] = count;
        }
        return temp;
    }
    public static int[] optimal(int[] nums) { // This approach is O(nlogn) time, O(n) space
		Map<Integer, Integer> map = new HashMap<>();
		int[] copy = nums.clone();

		Arrays.sort(copy);

		for (int i = 0; i < nums.length; i++) {
			map.putIfAbsent(copy[i], i);
		}

		for (int i = 0; i < nums.length; i++) {
			copy[i] = map.get(nums[i]);
		}
        return copy;
	}

    public static void main(String[] args) {
		int[] arr = {8, 1, 2, 2, 3};

		System.out.println(Arrays.toString(bruteForce(arr)));
		System.out.println(Arrays.toString(optimal(arr)));
	}
}