import java.util.*;

public class RotataeClockwise90 {
	public static int[][] rotate(int[][] arr, int[][] target) {
		if(arr == null || arr.length == 0) {
		   return arr;
        }

		/*

		// 1. Brute Force

		int[][] temp = new int[arr.length][arr.length];
		int c1 = 0;
		int c2 = 0;

		for(int i = arr.length - 1; i >= 0; i--) {
			for(int j = 0; j < arr.length; j++) {
				System.out.println(arr[i][j]);
				temp[j][c2] = arr[i][j];
			}
			c2++;
		}
		return temp;

		*/

		// 2. In-place Rotate (Optimized)

		// Transpose the matrix
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < i; j++) {
				int temp = arr[i][j];
				arr[i][j] = arr[j][i];
				arr[j][i] = temp;
			}
		}

		// swap columns
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr.length / 2; j++) {
				int temp = arr[i][j];
				arr[i][j] = arr[i][arr.length - j - 1];
				arr[i][arr.length - j - 1] = temp;
			}
        }

        boolean flag = true;

        for(int i = 0; i < arr.length; i++) {
			for(int j = 0; j < arr.length; j++) {
				if(arr[i][j] != target[i][j]) {
					flag = false;
				}
			}
		}

		if(flag) {
			System.out.println("Equal");
		}
		else {
			System.out.println("Not Equal");
		}

        return arr;
	}

	public static void main(String[] args) {
		//int[][] arr = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}};
		int[][] arr = {{0, 1}, {1, 0}};
		int[][] target = {{1, 0}, {0, 1}};

		int[][] result = rotate(arr, target);

		for(int[] item : result) {
			System.out.println(Arrays.toString(item));
		}
	}
}