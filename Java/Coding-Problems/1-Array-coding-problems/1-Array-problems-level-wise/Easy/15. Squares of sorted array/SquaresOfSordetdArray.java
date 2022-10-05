import java.util.Arrays;

public class SquaresOfSordetdArray {
	public static int[] sortedSquares(int[] nums) {

		for(int i = 0; i < nums.length; i++) {
			int square = nums[i] * nums[i];

			nums[i] = square;
		}

		Arrays.sort(nums);

		return nums;
    }

	public static void main(String[] args) {
		int[] arr = {-4, -1, 0, 3, 10};

		System.out.println(Arrays.toString(sortedSquares(arr)));
	}
}