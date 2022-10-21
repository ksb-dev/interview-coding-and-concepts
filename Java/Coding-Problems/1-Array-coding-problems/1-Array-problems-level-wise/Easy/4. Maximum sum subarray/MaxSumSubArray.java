public class MaxSumSubArray {
    public static int maxSum(int[] arr) {
        int sum = 0;
        int maxSum = Integer.MIN_VALUE;

        for(int i = 0; i < arr.length; i++) {
            sum += arr[i];

            if(sum > maxSum) maxSum = sum;

            if(sum < 0) sum = 0;
        }

        return maxSum;
    }
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        //int[] arr = { -1 };
        //int[] arr = { 5, 4, -1, 7, 8};

        System.out.println(maxSum(arr));
    }
}