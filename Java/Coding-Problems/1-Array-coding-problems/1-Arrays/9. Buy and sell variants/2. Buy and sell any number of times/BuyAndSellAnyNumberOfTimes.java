import java.util.*;

public class BuyAndSellAnyNumberOfTimes {

	public static int getProfit(int[] arr) {
		// Time Complexity O(n^2)
		// Space complexity O(1)

		int maxProfit = 0;

		for (int i = 1; i < arr.length; i++) {

			int profit = arr[i] - arr[i - 1];

			if (profit > 0)
				maxProfit += profit;
		}

        return maxProfit;
	}

	public static void main(String[] args) {
		//int[] arr = {7, 1, 5, 3, 6, 4};
		int[] arr = {100, 180, 260, 310, 40, 535, 695};
		//int[] arr = {7, 6, 4, 3, 1};
		int profit = getProfit(arr);

		System.out.println(profit);
	}
}