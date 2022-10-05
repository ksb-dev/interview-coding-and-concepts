import java.util.Arrays;

public class SortArrayWithSquares {

    public static void sort(int[] a) {

        for(int i = 0; i < a.length; i++) {
            a[i] = a[i] * a[i];
        }

        Arrays.sort(a);

        System.out.println(Arrays.toString(a));
    }

    public static void main(String[] args) {

		int[] a = {-6, -3, 2, 8, -1, 4};

		sort(a);
    }
}