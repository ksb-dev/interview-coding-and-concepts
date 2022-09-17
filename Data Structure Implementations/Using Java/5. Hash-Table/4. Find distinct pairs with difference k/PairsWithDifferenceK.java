import java.util.*;

class PairsWithDifferenceK {

	public static void bruteForce(int[] arr, int k) {
		int count  = 0;

		for(int i = 0; i < arr.length; i++) {
			for(int j = i + 1; j < arr.length; j++) {
				if(arr[i] - arr[j] == k) count++;
			}
		}

		System.out.println("Count of pairs using Brute Force : "+count);
	}

	public static void findPairUsingMap(int[] a, int k) {
		Set<Integer> set = new HashSet<>();
		int count = 0;

		for (int i: a) {

			if (set.contains(i - k)) {
				count++;
			}


			if (set.contains(i + k)) {
				count++;
			}

			set.add(i);
        }

        System.out.println("Count of pairs using HashMap : "+count);
	}

    public static void findDistinctPairUsingMap(int[] a, int k) {

        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		int count = 0;

		for (int i = 0; i < a.length; i++) {
			if (map.get(a[i]) != null)
				map.put(a[i], map.get(a[i]) + 1);
			else
				map.put(a[i], 1);
		}

		if (k == 0) {
			for (Map.Entry<Integer, Integer> entry : map.entrySet()) {

				if (entry.getValue() > 1) {
					count++;
				}
			}
		}
		else {
			for (Map.Entry<Integer, Integer> entry : map.entrySet()) {

				if (map.get(entry.getKey() + k) != null) {
					count++;
				}
			}
		}

        System.out.println("Count of distinct pairs using HashMap : "+count);
    }

    public static void main(String[] args) {
        int[] a = { 1, 5, 2, 2, 2, 5, 5, 4};
        int k = 3;

        //int[] a = {1, 7, 5, 9, 2, 12, 3};
        //int k = 2;

        //int[] a = {2, 1, -2, 2, 3};
        //int k = 0;

        bruteForce(a, k);
        findPairUsingMap(a, k);
        findDistinctPairUsingMap(a, k);

    }
}