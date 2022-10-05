public class SearchInSortedRotatedArray {

	public static int search(int[] arr, int target) {
		int low = 0;
		int high = arr.length - 1;

		while (low <= high) {

		  int mid = low + (high - low) / 2;

		  if (arr[mid] == target)
			return mid;

		  if(arr[low] <= arr[mid]){ //i.e. left part of the array is sorted
			  if(target >= arr[low] && target < arr[mid]) high = mid-1;
			  else low = mid+1;
		  }else{  // i.e. right part is sorted
			if(target > arr[mid] && target <= arr[high]) low = mid+1;
			  else high = mid-1;
          }
		}

        return -1;
	}

	public static void main(String[] args) {

		int[] arr = {4, 5, 6, 7, 0, 1, 2};
		int target = 0;

		System.out.println(search(arr, target));
	}
}