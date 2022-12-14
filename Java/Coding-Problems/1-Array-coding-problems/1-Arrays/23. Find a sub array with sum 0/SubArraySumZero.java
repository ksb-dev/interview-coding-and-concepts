import java.util.*;

class SubArraySumZero{
    //Function to check whether there is a subarray present with 0-sum or not.
    static boolean findsum(int arr[], int n) {
            //using Hashmap to store the prefix sum which has appeared already.
            HashMap<Integer, Integer> hM =  new HashMap<Integer, Integer>();

            int sum = 0;

            //iterating over the array.
            for (int i = 0; i < arr.length; i++) {
                //storing prefix sum.
                sum += arr[i];

                //if prefix sum is 0 or if it is already present in Hashmap
                //then it is repeated which means there is a subarray whose
                //summation is 0, so we return true.
                System.out.println(sum+" "+hM.get(sum));
                if (sum == 0 || hM.get(sum) != null)
                    return true;

                //storing every prefix sum obtained in Hashmap.
                hM.put(sum, i);

                System.out.println(hM);
            }
            //returning false if we don't get any subarray with 0 sum.
            return false;
    }

    public static void main(String[] args) {
		int[] a = {4, 2, -3, 1, 6};

		System.out.println(findsum(a, a.length));
	}
}