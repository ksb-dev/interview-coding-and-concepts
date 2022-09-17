import java.util.*;

class InPlaceReverse {

    public static void reverseArray(char[] s) {

        char temp;
        int start = 0;
        int end = s.length - 1;

        while (start < end) {
            temp = s[start];
            s[start] = s[end];
            s[end] = temp;

            start++;
            end--;
        }

        System.out.println(Arrays.toString(s));
    }

    public static void main(String[] args) {
		char[] c = {'h', 'e', 'l', 'l', 'o'};

		reverseArray(c);
	}
}