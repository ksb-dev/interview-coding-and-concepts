public class MissingKthPositive {
	public static int missing(int[] arr, int k) {
		/*

		// Brute force O(n)

		if(arr[0] > k) return k;

		int num = k;

		for(int a : arr) {

			//System.out.println(num);

			if(a <= num) {
				num++;
			}
			else {
				break;
			}
		}
		return num;

		*/
	}

	public static void main(String[] args) {
		int[] arr = {2, 3, 4, 7, 11};
		int k = 5;

		//int[] arr = {1, 2, 3, 4};
		//int k = 2;

		System.out.println(missing(arr, k));
	}
}