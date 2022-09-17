import java.util.*;

public class Sort012 {


	public static void sort(int[] a) {
		int count0= 0, count1 = 0, count2 = 0;

		for(int i = 0; i < a.length; i++) {
			if(a[i] == 0) count0++;

			if(a[i] == 1) count1++;

			if(a[i] == 2) count2++;
		}

		int i = 0;

		while (count0 > 0) {
		    a[i++] = 0;
		    count0--;
        }

        while (count1 > 0) {
			a[i++] = 1;
			count1--;
        }

        while (count2 > 0) {
			a[i++] = 2;
			count2--;
        }

		System.out.println(Arrays.toString(a));
	}

	public static void main(String[] args) {
		int[] a = {2, 0, 2, 1, 1, 0, 2};
		sort(a);
	}
}