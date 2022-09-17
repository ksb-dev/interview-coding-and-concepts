// iterative dynamic programming algorithm

// 1. Initialize currSum with 0 and maxSum with INT_MIN.
// 2. Now, iterate over the array and add the value of the current element to currSum and check
//    2.1. If currSum is greater than maxSum, update maxSum equals to currSum.
//    2.2. If currSum is less than zero, make currSum equal to zero.
// 3. Finally, print the value of maxSum.

class MaxSumSubArrayKadane{

    public static void maxSubarraySum(int arr[], int n){

        // Your code here
        int maxSum = Integer.MIN_VALUE;
        int curSum = 0;

        for(int i = 0; i < n; i++) {
            curSum = curSum + arr[i];

            if(curSum > maxSum) {
                maxSum = curSum;
            }

            if(curSum < 0) {
                curSum = 0;
            }
        }
        System.out.println(maxSum);
    }

    public static void main(String[] args) {
		//int[] a = {-1, -2, -3, -4};
		int[] a = {1, 2, 3, -2, 5};
		int n = a.length;

		maxSubarraySum(a, n);
	}
}