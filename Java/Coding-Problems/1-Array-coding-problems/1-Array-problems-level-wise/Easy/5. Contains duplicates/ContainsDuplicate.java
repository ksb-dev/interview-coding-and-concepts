// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

import java.util.*;

public class ContainsDuplicate {
    public static boolean containsDuplicate(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < arr.length; i++){
            if(map.containsKey(arr[i])) return true;

            map.put(arr[i], i);
        }
 
        return false;
    }
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4};

        System.out.println(containsDuplicate(arr));
    }
}
