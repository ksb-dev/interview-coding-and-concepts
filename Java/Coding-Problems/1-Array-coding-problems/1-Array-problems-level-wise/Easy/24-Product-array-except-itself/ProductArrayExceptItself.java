import java.util.*;

class ProductArrayExceptItself {

    public static int[] bruteForce(int[] arr) {

		int n = arr.length;

        int[] prefix = new int[n];
		prefix[0] = 1; // since first element can have no prefix

		for(int i = 1; i < n; i++) {
			prefix[i] = prefix[i-1] * arr[i-1];
		}

		int[] suffix = new int[n];

		suffix[n-1] = 1; // since last element can have no suffix

		for(int i = n-2 ; i >= 0; i--) {
			suffix[i] = suffix[i+1] * arr[i+1];
		}
		// Building Product Array
		int[] product = new int[n];

		for(int i = 0; i < n; i++) {
			product[i] = prefix[i] * suffix[i];
        }
        return product;
    }

    public static void main(String[] args) {
		//int[] arr = {1, 2, 3, 4};
		int[] arr = {-1, 1, 0, -3, 3};

		System.out.println(Arrays.toString(bruteForce(arr)));
	}
}