public class LinearSearch {

	public static int linearSearch(int[] arr, int k) {

		for(int i = 0; i < arr.length; i++) {
			if(arr[i] == k) {
				return i;
			}
		}
		return -1;
	}

	public static void main(String[] args) {
		int[] arr = {1, 5, 10, 6, 15, 76, 2};
		int k = 76;

		int result = linearSearch(arr, k);

		System.out.println(result);
	}
}