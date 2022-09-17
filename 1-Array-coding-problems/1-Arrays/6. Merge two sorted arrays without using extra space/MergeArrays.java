import java.util.Arrays;

class TestMergeArrayWithoutSpace{

	public void mergeArrayWithoutSpace(int[] a, int[] b){

		System.out.println("Arrays before merging \n");

		System.out.println(Arrays.toString(a));
		System.out.println(Arrays.toString(b)+"\n");

		int m = a.length;
		int n = b.length;

		//int i = n - 1;
		//int j = m - 2;

		for(int i = n - 1; i >= 0; i--){

			int j;
			int last = a[m - 1];

			System.out.println(m-1+" "+last);

			for(j = m - 2; j >= 0 && a[j] > b[i]; j--){

				a[j + 1] = a[j];
			}

			if(j != m- 2 || last > b[i]){

				a[j + 1] = b[i];

				b[i] = last;
			}
		}

		System.out.println("Arrays after merging \n");

		System.out.println(Arrays.toString(a));
		System.out.println(Arrays.toString(b));
	}

}

public class MergeArrays{

	public static void main(String[] args){

		TestMergeArrayWithoutSpace t = new TestMergeArrayWithoutSpace();

		//int[] a = {3, 4, 7, 8, 20, 22};
		//int[] b = {6, 7, 9, 10};

		int[] a = {1, 3, 5, 7};
		int[] b = {0, 2, 6, 8, 9};

		//int[] result = t.mergeArrayWithoutSpace(a, b);

		t.mergeArrayWithoutSpace(a, b);

		//System.out.println(Arrays.toString(result));
	}
}