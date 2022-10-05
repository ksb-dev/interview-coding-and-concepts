import java.util.*;

public class UnionAndIntersectionOfArrays {

    public static void main(String[] args) {
        int[] firstArr = {1, 2, 3, 4, 5, 6};
        int[] secondArr = {4, 9, 13, 15, 16, 17};

        findUnion(firstArr, secondArr);
    }

    private static void findUnion(int[] a, int[] b) {
        int i = 0;
        int j = 0;
        int count = 0;

        int totalLength = a.length + b.length;

        Set<Integer> set = new HashSet<>();
        ArrayList<Integer> list = new ArrayList<>();

		for(int element : a) {
			set.add(element);
		}

		/*for(int element : b) {
			set.add(element);
		}*/

		for(int element : b) {
			if(set.contains(element)) {
				count++;
				list.add(element);
			}
		}

        /*System.out.print("Union of two sorted arrays : ");
		for(Integer element : set) {
			System.out.print(element+" ");
		}

        System.out.println();
        System.out.println("Union Count "+set.size());*/

        System.out.print("Intesection of two sorted arrays : ");
        for(Integer element : list) {
			System.out.print(element+" ");
		}

        System.out.println();
        System.out.println("Intersection Count "+count);

        /*while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                System.out.print(a[i] + " ");
                count++;
                i++;
            } else if (b[j] < a[i]) {
                System.out.print(b[j] + " ");
                count++;
                j++;
            } else {
                System.out.print(a[i] + " ");
                i++;
                j++;
            }
        }

        while (i < a.length) {
            System.out.print(a[i] + " ");
            count++;
            i++;
        }

        while (j < b.length) {
            System.out.print(b[j] + " ");
            count++;
            j++;
        }
        System.out.println();
        System.out.println(count + 1);*/
    }

}