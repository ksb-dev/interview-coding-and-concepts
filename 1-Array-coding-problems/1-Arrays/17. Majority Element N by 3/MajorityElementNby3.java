// 1. Initialize an element m and a counter i with i = 0
// 2. For each element x of the input sequence:
// 3. If i = 0, then assign m = x and i = 1
// 4. else if m = x, then assign i = i + 1
// 5. else assign i = i - 1
// 6. Return m

import java.util.*;

public class MajorityElementNby3 {

    public static int majorityElement(int arr[]) {
        int count1 = 0, count2 = 0;

        // take the integers as the maximum
        // value of integer hoping the integer
        // would not be present in the array
        int first =  Integer.MIN_VALUE;
        int second = Integer.MAX_VALUE;

        for (int i = 0; i < arr.length; i++) {



            // if this element is previously
            // seen, increment count1.
            if (first == arr[i])
                count1++;

            // if this element is previously
            // seen, increment count2.
            else if (second == arr[i])
                count2++;

            else if (count1 == 0) {
                first = arr[i];
                count1++;
            }

            else if (count2 == 0) {
                second = arr[i];
                count2++;
            }

            // if current element is different
            // from both the previously seen
            // variables, decrement both the
            // counts.
            else {
                count1--;
                count2--;
            }

            System.out.println(i+" "+count1+" "+count2);
        }

        count1 = 0;
        count2 = 0;

        // Again traverse the array and
        // find the actual counts.
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == first)
                count1++;

            else if (arr[i] == second)
                count2++;
        }

        if (count1 > (arr.length / 3))
            return first;

        if (count2 > (arr.length / 3))
            return second;

        return -1;
    }

    // Driver code
    public static void main(String args[]) {
        int arr[] = { 1, 2, 3, 1, 1 };
        int element = majorityElement(arr);

        System.out.println(element);

    }
}