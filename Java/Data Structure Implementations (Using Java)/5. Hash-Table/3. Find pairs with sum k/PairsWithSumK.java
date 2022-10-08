import java.util.*;

class PairsWithSumK {

	public static void bruteForce(int[] arr, int k) {
		int count  = 0;

		for(int i = 0; i < arr.length; i++) {
			for(int j = i + 1; j < arr.length; j++) {
				if(arr[i] + arr[j] == k) count++;
			}
		}

		System.out.println("Count of  pairs using Brute Force: "+count);
	}

	public static void getPairsCountUsingMap(int[] arr, int k) {

		HashMap<Integer, Integer> map = new HashMap<>();

		for (int i = 0; i < arr.length; i++) {

			if (!map.containsKey(arr[i]))
				map.put(arr[i], 0);

			map.put(arr[i], map.get(arr[i]) + 1);
		}

		int twice_count = 0;

		for (int i = 0; i < arr.length; i++) {


			if (map.get(k - arr[i]) != null)
				twice_count += map.get(k - arr[i]);

			if (k - arr[i] == arr[i])
				twice_count--;

		}

		System.out.println("Count of pairs using HashMap: "+twice_count / 2);
    }

	public static void getDistinctPairsCountUsingMap(int[] arr, int k) {
		int count = 0;

		HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();

		for (int i = 0; i < arr.length; i++) {

			if(map.containsKey(arr[i]))
				map.put(arr[i], map.get(arr[i]) + 1);

			else
				map.put(arr[i], 1);
		}

		for (Map.Entry<Integer,Integer> entry : map.entrySet()) {

			int i = entry.getKey();

			if (2 * i == k) {

				if (map.get(i) > 1)
					count += 2;
			}

			else {
				if (map.containsKey(k - i)) {

					count += 1;
				}
			}
		}

		count = count / 2;

        System.out.println("Count of distinct pairs using HashMap: "+count);
	}

    public static void main(String[] args) {

		int[] arr = { 1, 5, 7, -1, 5 };
        int k = 6;

        //int[] arr = {2, 1, -2, 2, 3};
        //int k = 0;

        bruteForce(arr, k);
        getPairsCountUsingMap(arr, k);
        getDistinctPairsCountUsingMap(arr, k);
    }
}