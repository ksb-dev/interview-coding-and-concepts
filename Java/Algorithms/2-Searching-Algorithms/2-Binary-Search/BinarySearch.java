// Only works on sorted elements

// Time Complexity O(log n)
// Space Complexity O(log n) --> Recursive, O(1) --> Iterative

public class BinarySearch {
	/*
	// Recursive
	public static int search(int[] arr, int k, int left, int right) {

		if(left > right) {
			return -1;
		}

		int middle = (left + right) / 2;

		if(arr[middle] == k) {
			return middle;
		}

		if(k < arr[middle]) {
			return search(arr, k, left, middle - 1);
		}

		return search(arr, k, middle + 1, right);
	}

	public static int binarySearch(int[] arr, int k) {
		int result = search(arr, k, 0, arr.length - 1);

		return result;
	}
	*/


	//Iterative
	public static int binarySearch(int[] arr, int k) {
		int left = 0;
		int right = arr.length - 1;

		while(left <= right) {
			int middle = (left + right) / 2;

			if(k == arr[middle]) {
				return middle;
			}
			else if(k < arr[middle]) {
				right = middle - 1;
			}
			else {
				left = middle + 1;
			}
		}
		return -1;
	}

	public static void main(String[] args) {
		int[] arr = {1, 5, 8, 10, 12, 16};
		int k = 8;

		int result = binarySearch(arr, k);

		System.out.println(result);
	}
}