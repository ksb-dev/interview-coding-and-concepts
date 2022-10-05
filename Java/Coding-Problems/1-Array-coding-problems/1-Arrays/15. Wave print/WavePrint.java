// Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted in wave form
// if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

import java.util.*;

public class WavePrint{
    public static void wave(int[] arr) {
        // Sort the input array
        //Arrays.sort(arr); --> If we sort array using heap / merge then time complexity = O(nlogn)

        // Swap adjacent elements
        for (int i = 0; i < arr.length - 1; i += 2) {

            if(i > 0 && arr[i] < arr[i - 1]) {
				swap(arr, i, i - 1);
			}

			if(i < arr.length - 1 && arr[i] < arr[i + 1]) {
				swap(arr, i, i + 1);
			}

			//System.out.println(Arrays.toString(arr));
		}

		System.out.println(Arrays.toString(arr));
    }

    public static void swap(int arr[], int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    public static void main(String[] args) {
		int[] arr = {1, 2, 3, 4};
		wave(arr);
	}
}

// Time Complexity : O(n)