class JumpGame {
    public static boolean canJump(int[] nums) {
        int position = nums.length - 1;

        for(int i = nums.length - 1; i >= 0; i--) {
            if(i + nums[i] >= position) position = i;
        }
        return position == 0;
    }

    public static void main(String[] args) {
		int[] arr = {2, 3, 1, 1, 4};
		//int[] arr = {3, 2, 1, 0, 4};

		System.out.println(canJump(arr));
	}
}