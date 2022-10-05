import java.util.*;

public class LongestConsecutiveSubsequenceNaive {

	public static void find(int[] a) {

		Arrays.sort(a);

		int max = 1;
		int count = 1;

		for(int i = 0; i < a.length - 1; i++) {
			if(a[i+1] == a[i] + 1) {
				count++;

				if(count > max) max = count;
			}
			else {
				count = 1;
			}
		}

		//if(count > max) max = count;

		System.out.println(max);
	}

	public static void main(String[] args) {
		//int[] a = {102, 4, 100, 1, 101, 3, 2, 103, 104};
		//int[] a = {1, 9, 3, 10, 4, 20, 2};
		int[] a = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42};

		find(a);
	}
}

// O(nlogn)