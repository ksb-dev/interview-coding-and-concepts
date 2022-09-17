import java.util.*;

public class LongestConsecutiveSubsequenceOptimal {

	public static void find(int[] a) {
		HashSet<Integer> set = new HashSet<Integer>();
		int ans = 0;

		for (int i = 0; i < a.length; ++i)
	        set.add(a[i]);

	    for (int i = 0; i < a.length; ++i) {

			if (!set.contains(a[i] - 1)) {

				int j = a[i];

				while (set.contains(j))
					j++;

				if (ans < j - a[i])
					ans = j - a[i];
			}
		}
        System.out.println(ans);
	}

	public static void main(String[] args) {
		int[] a = {102, 4, 100, 1, 101, 3, 2, 103, 104};
		//int[] a = {1, 9, 3, 10, 4, 20, 2};
		//int[] a = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42};

		find(a);
	}
}

// O(nlogn)