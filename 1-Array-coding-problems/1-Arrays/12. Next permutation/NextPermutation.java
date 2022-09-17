// 1. scan from right to left, find the first element index 'p' that is less than its previous one.
// 2. scan from right to left, find the first element index 'q' that is greater than 'p'.
// 3. swap 'p' and 'q'
// 4. reverse elements [p+1, nums.length]

import java.util.*;
// 4, 5, 6, 3, 2, 1

public class NextPermutation {

	public static void nextPermutation(int[] a) {
	    //find first decreasing digit
	    int p = -1;

	    for (int i = a.length - 1; i > 0; i--) {

	        if (a[i] > a[i - 1]) {

	            p = i - 1;

	            break;
	        }
	    }

	    if (p == -1) {

	        reverse(a, 0, a.length - 1);

	        System.out.println(Arrays.toString(a));

	        return;
	    }

	    int q = a.length - 1;

	    for (int i = a.length - 1; i >= (p + 1); i--) {
	        if (a[i] > a[p]) {

	            q = i;

	            break;
	        }
	    }

	    swap(a, p, q);

	    reverse(a, (p + 1), a.length - 1);

	    System.out.println(Arrays.toString(a));
	}

	private static void swap(int[] nums, int i, int j) {
	    int t = nums[i];
	    nums[i] = nums[j];
	    nums[j] = t;
	}

	private static void reverse(int[] nums, int i, int j) {
	    while (i < j) {
	        swap(nums, i, j);
	        i++;
	        j--;
	    }
    }

	public static void main(String[] args) {
		int[] a = {4, 5, 6, 3, 2, 1};
		//int[] a = {3, 2, 1};
		nextPermutation(a);
	}
}