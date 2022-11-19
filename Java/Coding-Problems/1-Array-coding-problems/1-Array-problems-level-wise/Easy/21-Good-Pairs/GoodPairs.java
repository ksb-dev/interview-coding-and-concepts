import java.util.*;

public class GoodPairs {
	public static int bruteForce(int[] nums) {
		int goodPairs = 0;

		for(int i = 0; i < nums.length; i++) {
			for(int j = i; j < nums.length; j++) {
				if(nums[i] == nums[j] && i < j) {
					goodPairs += 1;
				}
			}
		}
        return goodPairs;
	}

	public static int optimal(int[] arr) {
		HashMap<Integer, Integer> map = new HashMap<>();
		int goodPairs = 0;

		for(int i = 0; i < arr.length; i++) {
			map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
		}

		for(int i : map.values()){
		//Handshake formulae , google it for better understanding
			goodPairs += (i*(i-1))/2;
        }
		return goodPairs;
	}

	public static void main(String[] args) {
		int[] arr = {1, 2, 3, 1, 1, 3};

		System.out.println(bruteForce(arr));
		System.out.println(optimal(arr));
	}
}