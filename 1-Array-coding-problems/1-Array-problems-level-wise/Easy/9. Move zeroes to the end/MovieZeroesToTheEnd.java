import java.util.*;

public class MovieZeroesToTheEnd {
	public static int[] moveToEnd(int[] arr) {
		int count = 0;

		for(int i = 0; i < arr.length; i++) {
			if(arr[i] != 0) {
				arr[count++] = arr[i];
			}
		}

		for(int i = count; i < arr.length; i++) {
			arr[i] = 0;
		}

		return arr;
	}

	public static void main(String[] args) {
		//int[] arr = {0, 1, 0, 3, 12};
		int[] arr = { 0 };

		System.out.println(Arrays.toString(moveToEnd(arr)));
	}
}