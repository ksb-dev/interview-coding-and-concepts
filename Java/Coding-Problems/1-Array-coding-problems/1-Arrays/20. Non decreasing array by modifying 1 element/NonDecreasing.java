public class NonDecreasing {

    public static boolean isPossible(int[] a, int n) {
        // Write your code here.
        int count1 = 0;
		int max = a[0];

		for (int i = 1; i < a.length; i++) { // 5 7 2 10
			if (a[i] < max)
				count1++;
			else
				max = a[i];
		}

		int min = a[a.length - 1];

		int count2 = 0;

		for (int i = (a.length - 2); i >= 0; i--) {
			if (a[i] > min)
				count2++;
			else
				min = a[i];
		}
        return Math.min(count1, count2) < 2;
    }

    public static void main(String[] args) {
		int[] a = {5, 7, 2, 10};
		//int[] a = {8, 4, 2};
		int n = a.length;

		System.out.println(isPossible(a, n));
	}
}