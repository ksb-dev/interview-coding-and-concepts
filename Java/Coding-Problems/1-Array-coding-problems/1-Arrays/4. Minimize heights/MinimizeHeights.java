import java.util.*;

class MinimizeHeights{
    public static void  getMinDiff(int[] arr, int n, int k) {
        // code here
        Arrays.sort(arr);

        int max = arr[n-1];
        int min = arr[0];
        int ans = max - min;

        for(int i = 0; i < n - 1; i++) {
            max = Math.max((arr[i] + k), (arr[n-1] - k));
            min = Math.min((arr[0] + k), (arr[i+1] - k));

            if(min < 0) {
                continue;
            }

            ans = Math.min(ans, (max - min));
        }
        System.out.println(ans);
    }

    public static void main(String[] args) {
		int[] a = {1, 5, 8, 10};
		int n = a.length;
		int k = 2;

		getMinDiff(a, n, k);
	}
}