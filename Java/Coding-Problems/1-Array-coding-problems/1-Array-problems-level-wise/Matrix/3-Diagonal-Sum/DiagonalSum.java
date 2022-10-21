/*

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary
diagonal that are not part of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25

Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25

Notice that element mat[1][1] = 5 is counted only once.

*/
import java.util.*;

class DiagonalSum {

    public static int diagonalSum(int[][] arr) {
        int sum = 0;

        for(int i = 0; i < arr.length; i++) {
            sum += arr[i][i] + arr[i][arr.length - 1 - i];

            System.out.println(arr[i][i] + " " + arr[i][arr.length - 1 - i]);
        }

        if(arr.length % 2 != 0) {
            sum -= arr[arr.length / 2][arr.length / 2];

            System.out.println(arr[arr.length / 2][arr.length / 2]);
        }
        return sum;
    }

    public static void main(String[] args) {
		int[][] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
		//int[][] arr = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}};

		System.out.println(diagonalSum(arr));
	}
}