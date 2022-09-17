import java.util.*;

public class AddOneToNumber{
	public static void add(int[] a) {
		ArrayList<Integer> list = new ArrayList<>();

		for(int i = 0; i < a.length; i++) {
			list.add(a[i]);
		}

		// Remove zeroes at front
		int i = 0;

		while(i < list.size() - 1 && list.get(i) == 0) {
			list.remove(i);
		}

		int sum = 0;
		int carry = 1;

		for(i = list.size() - 1; i >= 0; i--) {
			sum = list.get(i) + carry;

			list.set(i, (sum % 10));

			carry = (sum / 10);

			// If carry is 0 no need to proceed further
			if(carry == 0) {
				break;
			}
		}

		// If carry still left
		if(carry != 0) {
			list.add(0, carry);
		}

		int[] result = new int[list.size()];

		for(int j = 0; j < result.length; j++) {
			result[j] = list.get(j);
		}

		System.out.println(Arrays.toString(result));
	}
	public static void main(String[] args) {
		int[] a = {9, 9};
		//int[] a = {0};
		//int[] a = {9};
		//int[] a = {1, 9, 9};

		add(a);
	}
}