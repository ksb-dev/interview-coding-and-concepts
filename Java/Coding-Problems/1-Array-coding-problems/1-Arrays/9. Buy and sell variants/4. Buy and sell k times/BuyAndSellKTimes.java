import java.util.*;

public class BuyAndSellKTimes {

	public static int getProfit(int[] price, int k) {
		// Time Complexity O(n^2)
		// Space complexity O(1)
		int n = price.length;
		int profit[][] = new int[k + 1][ n + 1];

		for (int i = 0; i <= k; i++)
			profit[i][0] = 0;

		for (int j = 0; j <= n; j++)
			profit[0][j] = 0;

		for (int i = 1; i <= k; i++) {
			int prevDiff = Integer.MIN_VALUE;

			for (int j = 1; j < n; j++) {
				prevDiff = Math.max(prevDiff, profit[i - 1][j - 1] - price[j - 1]);
				profit[i][j] = Math.max(profit[i][j - 1], price[j] + prevDiff);
			}
		}

        return profit[k][n - 1];
	}

	public static void main(String[] args) {
		int[] arr = {10, 22, 5, 75, 65, 80};
		int k = 2;
		int profit = getProfit(arr, k);

		System.out.println(profit);
	}
}