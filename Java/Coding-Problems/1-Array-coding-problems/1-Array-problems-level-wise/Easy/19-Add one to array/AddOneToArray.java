import java.util.*;

class AddOneToArray {

    public static int[] addOne(int[] digits) {

        for(int i = digits.length - 1; i >= 0; i--) {

            digits[i] = digits[i] + 1;

            if(digits[i] < 10) {
                break;
            }
            else {
                digits[i] = 0;

                if(i == 0) {
                    int[] newDigits = new int[digits.length + 1];

                    newDigits[0] = 1;

                    return newDigits;
                }
            }
        }
        return digits;
    }
    public static void main(String[] args) {
		//int[] arr = {1, 3};
		int[] arr = {9, 9, 9};

		System.out.println(Arrays.toString(addOne(arr)));
	}
}