/*

You are given a read only array of n integers from 1 to n.

Each integer appears exactly once except A which appears twice and B which is missing.

Return A and B.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Note that in your output A should precede B.

Example:

Input:[3 1 2 5 3]

Output:[3, 4]

A = 3, B = 4

*/

import java.util.*;

public class RepeatAndMissing {

	public static ArrayList<Integer> repeatAndMissing(List<Integer> list) {
		Integer[] arr = new Integer[list.size()];
        arr = list.toArray(arr);

        System.out.println(Arrays.toString(arr));

		ArrayList<Integer> result = new ArrayList<>();

		return result;
    }

	// Using HashMap

	/*public static ArrayList<Integer> repeatAndMissing(List<Integer> list) {

		Map<Integer, Boolean> map = new HashMap<>();
		ArrayList<Integer> result = new ArrayList<>();

		for (int i = 0; i < list.size(); i++) {

			if (map.get(list.get(i)) == null) {
				map.put(list.get(i), true);
			}
			else {
				result.add(list.get(i));
			}
		}

		for (int i = 1; i <= list.size(); i++) {
			if (map.get(i) == null) {
				result.add(i);
			}
        }

		return result;
    }*/

	public static void main(String[] args) {
		List<Integer> list = new ArrayList<>();
		list.add(3);
		list.add(1);
		list.add(2);
		list.add(5);
		list.add(3);

		System.out.println(repeatAndMissing(list));
	}
}