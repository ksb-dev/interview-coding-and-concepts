import java.util.*;

public class MajorityElementNby2 {
	public static void main(String[] args) {

		//int[] arr = {3, 2, 2, 1, 5, 2, 2, 2, 3};
		int[] arr = {2, 2, 2, 2, 1, 1, 1};

		int majorityElement = Integer.MIN_VALUE;
		int count = 0;

		for (int i = 0; i < arr.length; i++) {

			if (count == 0) {
				majorityElement = arr[i];
				count = 1;
			}
			else if (majorityElement == arr[i]) {
				count++;
			}
			else {
				count--;
			}
		}

		//System.out.println(count);
		//System.out.println(majorityElement);

		int n = (arr.length) / 2;

		for(int i = 0; i < arr.length; i++) {

			if(arr[i] == majorityElement) {

				count++;

				if(count > n) {
					System.out.println("Majority Element Is: "+majorityElement);
					return;
				}
			}
		}
		System.out.println("Majority Element doesn't exist");
	}
}

// Time Complexity : O(n)
// Space complexity: O(1)