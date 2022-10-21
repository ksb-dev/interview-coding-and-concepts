/*

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

--> To flip an image horizontally means that each row of the image is reversed.
    ex: flipping [1,1,0] horizontally results in [0,1,1].

--> To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
    ex : inverting [0,1,1] results in [1,0,0].

*/

import java.util.*;

class FlippingImage {

	private static void invert(int arr[]){

		for(int i = 0; i < arr.length; i++){
			if(arr[i] == 0) {
				arr[i] = 1;
			}
			else arr[i] = 0;
		}
    }

    private static void reverse(int arr[]){

		int i = 0, j = arr.length - 1;

		while(i <= j){
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j--;
		}
	}

    public static int[][] flipImage(int[][] arr) {
        for(int[] item : arr){
            reverse(item);
            invert(item);
        }
        return arr;
    }

    public static void main(String[] args) {
		int[][] arr = {{1, 1, 0}, {1, 0, 1}, {0, 0, 0}};

		int[][] result = flipImage(arr);

		for(int[] item : result) {
			System.out.println(Arrays.toString(item));
		}
	}
}