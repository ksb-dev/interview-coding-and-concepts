import java.util.*;

public class PascalTriangle {
	public static List<List<Integer>> printPascal(int n) {
		List <List<Integer>> triangle = new ArrayList<>();

		if(n == 0) return triangle;

		List<Integer> first_row = new ArrayList<>();
		first_row.add(1);
		triangle.add(first_row);

		for(int i = 1; i < n; i++) {
			List<Integer> prev_row = triangle.get(i-1);
			List<Integer> curr_row = new ArrayList<>();

			curr_row.add(1);

			for(int j = 1; j < i; j++) {
				System.out.println(prev_row);
				System.out.println(prev_row.get(j-1)+" "+prev_row.get(j));
				curr_row.add(prev_row.get(j-1) + prev_row.get(j));
			}

			curr_row.add(1);

			triangle.add(curr_row);
        }
		return triangle;
	}

	public static void main(String[] args) {
		int n = 5;

		List<List<Integer>> result = printPascal(n);

		System.out.println(result);

		for(int i = 0; i < result.size(); i++) {
			System.out.println(result.get(i));
		}
	}
}