class IsPalindrome {
    public static boolean isPalindrome(String S) {
        // code here
        String s = S.trim().toLowerCase();

		char[] c = s.toCharArray();
		int length = c.length - 1;

		for(int i = 0; i < ((c.length) / 2); i++) {

			if(c[i] == c[length]) {

				length--;
			}

			else {

				return false;
			}
		}
        return true;
    }

    public static void main(String[] args) {
		String s = "ababa";

		System.out.println(isPalindrome(s));
	}
};