/*

Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

*/

import java.util.*;

class LuckyNumberInMatrix {

    public static List<Integer> findLucky(int[][] matrix) {

        List<Integer> res = new ArrayList<Integer>();

        if(matrix.length == 0 || matrix[0].length == 0)return res;

        for(int i = 0; i < matrix.length; i++){
            int min = Integer.MAX_VALUE;
            int col = 0;

            for(int j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] < min){
                    min = matrix[i][j];
                    col = j;
                }
            }

            System.out.println("min : " + min + " col : " + col);

            boolean isLucky = true;

            for(int j = 0; j < matrix.length; j++){
				System.out.println(matrix[j][col]);
                if(matrix[j][col] > min){
                    isLucky = false;
                    break;
                }
            }

            if(isLucky){
				res.add(matrix[i][col]);
			}

            System.out.println(res);
            System.out.println("------------------------");
        }
        return res;
    }

    public static void main(String[] args) {
		int[][] matrix = {{7, 3, 8}, {15, 16, 17}, {9, 11, 13}};

		System.out.println(findLucky(matrix));
	}
}