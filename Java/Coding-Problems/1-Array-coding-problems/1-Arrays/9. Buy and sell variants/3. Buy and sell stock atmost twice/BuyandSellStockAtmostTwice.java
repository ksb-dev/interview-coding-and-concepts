class TestBuyandSellStockAtmostTwice{

	public int buyandSellStock(int[] a){

        int profit[] = new int[a.length];

		for (int i = 0; i < a.length; i++){  // 7, 1, 5, 10, 8, 4

			profit[i] = 0;
		}


		int max_price = a[a.length - 1];

		for(int i = (a.length - 2); i >= 0; i--){

		    if(a[i] > max_price){

				 max_price = a[i];

				 System.out.println("max_price : "+max_price);
			}

		     profit[i] = Math.max(profit[i + 1],max_price - a[i]);

		     System.out.println("profit[i] : "+profit[i]);

		     System.out.println("-----------------------");

		}

		System.out.println("------for1------\n");

		int min_price = a[0];

		for (int i = 1; i < a.length; i++) {

		     if (a[i] < min_price){

				 min_price = a[i];

				 System.out.println("min_price : "+min_price);
			 }

		     profit[i] = Math.max(profit[i - 1],profit[i] + (a[i] - min_price));

		     System.out.println("profit[i] : "+profit[i]);

		     System.out.println("-----------------------");

		}

		System.out.println("------for2------\n");

		for(int i = 0; i < profit.length; i++){

			System.out.println(profit[i]);
		}

		System.out.println("-----------------------");

		int result = profit[a.length - 1];

		return result;
    }
}

public class BuyandSellStockAtmostTwice{

	public static void main(String[] args){

		TestBuyandSellStockAtmostTwice t = new TestBuyandSellStockAtmostTwice();

		int[] a = {7, 1, 5, 10, 8, 4};

		//int[] a = {2, 30, 15, 10, 8, 25, 80};

		//int[] a = {10, 22, 5, 75, 65, 80};

		//int[] a = {100, 30, 15, 10, 8, 25, 80};

		//int[] a = {90, 80, 70, 60, 50};

		int result = t.buyandSellStock(a);

		//t.buyandSellStock(a);

		System.out.println(result);
	}
}