/*

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

*/

import java.util.*;

class TransPoseMatrix {

    public static int[][] transpose(int[][] arr) {

        /*int transposedMatrix[][] = new int[arr[0].length][arr.length];

        for (int i = 0; i < arr[0].length; i++) {
            for (int j = 0; j < arr.length; j++) {
                transposedMatrix[i][j] = arr[j][i];
            }
        }
        return transposedMatrix;*/


        /*
        // In-place transpose for square matrix only

        for(int i = 0; i < arr.length; i++) {
            for(int j = 0; j < i; j++) {
                int temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
            }
        }
        return arr;
        */

    }

    public static void main(String[] args) {
		//int[][] arr = {{1, 2, 3}, {4, 5, 6}};
		int[][] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

		int[][] result = transpose(arr);

		for(int[] item : result) {
			System.out.println(Arrays.toString(item));
		}
	}
}