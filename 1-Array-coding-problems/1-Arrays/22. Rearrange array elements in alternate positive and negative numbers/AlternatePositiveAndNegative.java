import java.util.*;

class AlternatePositiveAndNegative{

    public static void rearrange(int arr[], int n) {

        ArrayList<Integer> neg = new ArrayList<Integer>();
        ArrayList<Integer> pos = new ArrayList<Integer>();

        for (int i = 0; i < n; i++) {

            if (arr[i] < 0)
                neg.add(arr[i]);
            else
                pos.add(arr[i]);
        }

        int i = 0, j = 0, k = 0;

        while (i < neg.size() && j < pos.size()) {
            arr[k++] = pos.get(j++);
            arr[k++] = neg.get(i++);
        }

        while (j < pos.size()) { arr[k++] = pos.get(j++); }

        while (i < neg.size()) { arr[k++] = neg.get(i++); }

        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {
		int[] arr = {9, 4, -2, -1, 5, 0, -5, -3, 2};

		rearrange(arr, arr.length);
	}
}