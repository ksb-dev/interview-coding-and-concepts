import java.util.Arrays;

class ZigZagArray {

    public static void zigZag(int[] arr) {

		boolean flag = true;

		int temp = 0;

		for (int i = 0; i <= arr.length - 2; i++) {

			if (flag) {

				if (arr[i] > arr[i+1]) {

					temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;

					System.out.println(i);
					System.out.println("if");
				}

			}
			else {
				if (arr[i] < arr[i+1]) {
					temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;

					System.out.println(i);
					System.out.println("else if");
				}
			}
			flag = !flag;

			System.out.println(Arrays.toString(arr));
			System.out.println("----");
		}
		System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {
		//int[] arr = {4, 3, 7, 8, 6, 2, 1};
		int[] arr = {4, 3, 2, 1};
        zigZag(arr);

    }
}