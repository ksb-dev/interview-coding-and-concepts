import java.util.*;

public class BucketSort {
	public static int[] bucketSort(int[] arr, int numberOfBuckets) {
		List<List<Integer>> buckets = new ArrayList<>();

		for(int i = 0; i <= numberOfBuckets; i++) {
			buckets.add(new ArrayList<>());
		}

		for(int item : arr) {
			buckets.get(item / (numberOfBuckets)).add(item);
		}

		int count = 0;

		for(List<Integer> bucket : buckets) {
			Collections.sort(bucket);

			for(int item : bucket) {
				arr[count++] = item;
			}
		}

		return arr;
	}

	public static void main(String[] args) {
		int[] arr = {9, 4, 8, 2, 8, 1, 4, 5, 7, 9};
		int numberOfBuckets = 3;

		int[] sortedArray = bucketSort(arr, numberOfBuckets);

		System.out.println(Arrays.toString(sortedArray));
	}
}