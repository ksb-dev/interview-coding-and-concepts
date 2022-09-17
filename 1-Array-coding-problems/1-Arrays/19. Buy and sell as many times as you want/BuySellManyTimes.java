public class BuySellManyTimes{

    public static void getMaximumProfit (int n, long[] price) {
        // Your code goes here.
        long profit = 0;

        for (int i = 1; i < n; i++) {

            // traversing through array from (i+1)th
            // position
            long sub = price[i] - price[i - 1];

            if (sub > 0)
                profit += sub;
        }

        System.out.println(profit);
    }

    public static void main(String[] args) {
		long[] a = {1, 2, 3, 4, 5, 6, 7};
		int n = a.length;

		getMaximumProfit(n, a);
	}
}