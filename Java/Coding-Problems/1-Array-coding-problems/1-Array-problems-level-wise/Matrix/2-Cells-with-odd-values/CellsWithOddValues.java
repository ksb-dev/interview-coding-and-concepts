/*

There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci]
represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.

Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6

Explanation: Initial matrix = [[0,0,0],[0,0,0]].

After applying first increment it becomes [[1,2,1],[0,1,0]].

The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

*/

import java.util.*;

class CellsWithOddValues {

    public static int oddCells(int m, int n, int[][] indices) {

        int[][] matrix = new int[m][n];
        int count=0;

        for(int i = 0; i < indices.length; i++) {

            int row = indices[i][0];
            int col = indices[i][1];

            System.out.println("row : " + row + " col : " + col);

            for(int j = 0; j < n; j++) {
                matrix[row][j]++;
            }


            for(int k = 0; k < m; k++) {
                matrix[k][col]++;
            }

        }
        for(int r = 0; r < m; r++) {
                for(int c = 0;c < n; c++){
                    if(matrix[r][c] % 2 != 0)
                        count++;
                }
            }
        return count;
    }

    public static void main(String[] args) {
		int[][] arr = {{0, 1}, {1, 1}};
		int m = 2;
		int n = 3;

		/*int[][] arr = {{1, 1}, {0, 0}};
		int m = 2;
		int n = 2;*/

		System.out.println(oddCells(m, n, arr));
	}
}