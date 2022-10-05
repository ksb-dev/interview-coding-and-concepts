class CountPairsEqualSum {
    public static int getPairsCount(int[] arr, int k) {
        // code here
        int l = 0;
        int r = arr.length - 1;
        int count = 0;

        while(l < r) {
            if(arr[l] + arr[r] < k) {
                l++;
            }
            else if(arr[l] + arr[r] > k) {
                r--;
            }
            else {
				System.out.println(arr[l]+" , "+arr[r]);
                l++;
                r--;
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
		int[] a = {1, 5, 7, 1};
		int k = 6;
		int count = getPairsCount(a, k);

		System.out.println(count);
	}
}