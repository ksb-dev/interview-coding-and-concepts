import java.util.*;

class SpiralMatrix1 {

    public static List<Integer> spiral(int[][] matrix) {

		ArrayList<Integer> output = new ArrayList<Integer>();
		int row = 0;
		int col = 0;

		int r = matrix.length;
		int c = matrix[0].length;

		while(row < r && col < c) {
		   //Printing 1st row

		   for(int i = col; i < c; i++)
			   output.add(matrix[row][i]);
		   row++;

		   //System.out.println(output);

		   //Printing last col

		   for(int i = row; i < r; i++)
			   output.add(matrix[i][c-1]);
		   c--;

		   //System.out.println(output);

		   //Printing last row

			if(row < r) {
				for(int i = c-1; i >= col; --i)
					output.add( matrix[r-1][i]);
				r--;
			}

			//System.out.println(output);

		   //Printing first col

			if(col < c) {
				for(int i = r-1; i >= row; --i)
					output.add( matrix[i][col]);
				col++;
			}

			//System.out.println(output);

			//System.out.println("-----------------");

		}
        return output;
    }
    public static void main(String[] args) {
		int[][] mat = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}};

		List<Integer> result = spiral(mat);

		System.out.println(result);
	}
}