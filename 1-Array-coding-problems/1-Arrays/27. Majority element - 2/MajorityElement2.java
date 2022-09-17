import java.util.*;

public class MajorityElement2 {
	public static void main(String[] args) {
		int[] arr = {3, 2, 2, 1, 3, 5, 2, 3};
		int num1 = -1;
		int num2 = -1;
		int count1 = 0;
		int count2 = 0;

		for(int i = 0; i < arr.length; i++) {
			if(arr[i] == num1) {
				count1++;
			}
			else if(arr[i] == num2) {
				count2++;
			}
			else if(count1 == 0) {
				num1 = arr[i];
				count1 = 1;
			}
			else if(count2 == 0) {
				num2 = arr[i];
				count2 = 1;
			}
			else {
				count1--;
				count2--;
			}
		}

		ArrayList<Integer> res = new ArrayList<>();

		if(isGreaterThanNb3(arr, num1) == true)
			res.add(num1);

		if(num1 != num2 && isGreaterThanNb3(arr, num2) == true)
			res.add(num2);

        System.out.println(res);
	}

	public static boolean isGreaterThanNb3(int[] arr, int num) {
		int count = 0;

		for(int ele : arr) {
			if(ele == num)
				count++;
		}

        return count > arr.length / 3;
	}
}

/*

/*int k = 7;
		int n = (k / 3);
		int result = 0;

		HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();

		for (int i = 0; i < list.size(); i++) {
			int key = list.get(i);
			if(hm.containsKey(key)) {
				int value = hm.get(key);
				hm.put(key, value + 1);
			}
			else {
				hm.put(key, 1);
			}
        }

        System.out.println(hm);

        for (int value : hm.values()) {
			if(value > n) {
				result = value;
			}
        }
        System.out.println(result);
*/

/*

ArrayList<Integer> ans = new ArrayList<>();
        int c1=0,c2=0,nums1=-1,nums2=-1;
        for(int i=0;i<nums.size();i++){
            if(nums.get(i) == nums1)
                c1++;
            else if(nums.get(i)==nums2)
                c2++;
            else if(c1==0){
                nums1 = nums.get(i);
                c1=1;
            }
            else if(c2==0){
                nums2 = nums.get(i);
                c2 = 1;
            }
            else{
                c1--;
                c2--;
            }
        }
        c1=0;
        c2=0;
        int n = nums.size();
        for(int i=0;i< n;i++){
            if(nums.get(i) == nums1)
                c1++;
            else if(nums.get(i) == nums2)
                c2++;
        }
        if(c1 > n/3)
            ans.add(nums1);
        if(c2 > n/3)
            ans.add(nums2);
        return ans;
*/