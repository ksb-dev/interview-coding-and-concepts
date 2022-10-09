import java.util.*;

public class InsertionSort {

	public static int[] insertionSort(int[] arr) {

		for(int i = 1; i < arr.length; i++) {

			//System.out.println(Arrays.toString(arr));
			//System.out.println("----------------------");

			int key = arr[i];
			int prevIndex = i - 1;

			while(prevIndex >= 0 && key < arr[prevIndex]) {
				arr[prevIndex + 1] = arr[prevIndex];
				--prevIndex;
			}

			arr[prevIndex + 1] = key;


		}
		return arr;
	}

	public static void main(String[] args) {
		int[] arr = {10, 3, 12, 2, 4, 8};

		int[] sortedArray = insertionSort(arr);

		System.out.println(Arrays.toString(sortedArray));
	}
}