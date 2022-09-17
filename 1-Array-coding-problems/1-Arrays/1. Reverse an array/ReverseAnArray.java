import java.util.*;
import java.lang.*;
import java.io.*;

class ReverseAnArray {
	public static void main (String[] args) {
		//code
		Scanner sc = new Scanner(System.in);
		int cases = sc.nextInt();

		while(cases > 0) {
		    int size = sc.nextInt();
		    int[] arr = new int[size];

		    for(int i = 0; i < size; i++) {
		        arr[i] = sc.nextInt();
		    }

		    for(int j = size-1;j >= 0;j--) {
		        System.out.print(arr[j]+" ");
		    }

		    System.out.println();
		    cases--;
		}
	}
}