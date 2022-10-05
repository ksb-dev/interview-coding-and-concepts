import java.util.HashSet;

class Subset {

    private static boolean isSubset(int a1[], int a2[]) {

        HashSet<Integer> set = new HashSet<>();

        for (int i = 0; i < a1.length; i++) {
            if (!set.contains(a1[i]))
                set.add(a1[i]);
        }

        for (int i = 0; i < a2.length; i++) {
            if (!set.contains(a2[i]))
                return false;
        }
        return true;
    }

    // Driver Code
    public static void main(String[] args) {
        int[] a1 = {11, 1, 13, 21, 3, 7};
        int[] a2 = {11, 3, 7, 1};
        //int[] a2 = {100, 13, 7, 3};


        if (isSubset(a1, a2))
            System.out.println("arr2 is a subset of arr1");
        else
            System.out.println("arr2 is not a subset of arr1");
    }
}