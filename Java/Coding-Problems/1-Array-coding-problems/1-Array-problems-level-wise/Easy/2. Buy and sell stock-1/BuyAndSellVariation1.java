/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/

public class BuyAndSellVariation1 {
	// Brute force
	/*

	public static int maxProfit(int[] prices) {
		int maxProfit = 0;

		for(int i = 0; i < prices.length - 1; i++)
			for(int j = i + 1; j < prices.length; j++)
				maxProfit = Math.max(maxProfit, prices[j] - prices[i]);

		return maxProfit;
    }

    */

    // Optimized

    public static int maxProfit(int[] prices) {
		/*int minSoFar = arr[0];
		int maxProfit = 0;

		for(int i = 1; i < arr.length; i++) {
			minSoFar = Math.min(minSoFar, arr[i]);
			int profit = arr[i] - minSoFar;
			maxProfit = Math.max(maxProfit, profit);
		}*/

		int minSoFar = Integer.MAX_VALUE;
		int maxProfit = 0;
		int profitIfSoldToday = 0;

		for(int i = 0; i < prices.length; i++) {
			if(prices[i] < minSoFar) {
				minSoFar = prices[i];

				System.out.println("minSoFar : "+minSoFar);
			}

			profitIfSoldToday = prices[i] - minSoFar;

			System.out.println("profitIfSoldToday : "+profitIfSoldToday);

			if(profitIfSoldToday > maxProfit) {
				maxProfit = profitIfSoldToday;

				System.out.println("maxProfit : "+maxProfit);
			}
		}

		return maxProfit;
    }

	public static void main(String[] args) {
		int[] arr = {7, 1, 5, 3, 6, 4};

		System.out.println(maxProfit(arr));
	}
}