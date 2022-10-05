import java.util.*;

// Time complexity O(n^3)

/*class TestTripletSumArray{

	public boolean tripletSumArray(int[] a, int b){

		for(int i = 0; i < a.length; i++){

			for(int j = i + 1; j < a.length; j++){

				for(int k = j + 1; k < a.length; k++){

					if(a[i] + a[j] + a[k] == b){

						return true;
					}
				}
			}
		}

		return false;
	}
}*/

// Time complexity O(n^2)

class TestTripletSumArray{

	public boolean tripletSumArray(int[] a, int b){

		Arrays.sort(a);

		for(int i = 0; i < a.length - 1; i++){

			int start = a[i];
			int left = i + 1;
			int right = a.length - 1;

			while(left < right){

				if(start + a[left] + a[right] == b){

					System.out.println(start +" "+a[left]+" "+a[right]);

					left++;
					right--;

					return true;
				}
				else if(start + a[left] + a[right] < b){

					left++;
				}
				else{

					right--;
				}
			}
		}

		return false;
	}
}

public class TripletSumArray{

	public static void main(String[] args){

		 TestTripletSumArray t = new  TestTripletSumArray();

		 //int[] a = {1, 4, 45, 6, 10, 8};

		 //int b = 13;

		 int[] a = {0, -1, 2, -3, 1};

		 int b = -2;

		 boolean result = t.tripletSumArray(a, b);

		 //t.tripletSumArray(a, b);

		 System.out.println(result);
	 }
 }

