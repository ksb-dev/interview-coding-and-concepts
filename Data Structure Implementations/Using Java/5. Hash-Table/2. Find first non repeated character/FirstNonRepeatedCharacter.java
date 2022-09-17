import java.util.*;

public class FirstNonRepeatedCharacter {

	public static void findFirstRepeatedCharacter(String s) {
		Set<Character> set = new HashSet<>();

		for(char c : s.toCharArray()) {
			if(set.contains(c)) {
				System.out.println("First repeated character : "+c);

				return;
			}

			set.add(c);
		}

		System.out.println("First repeated character : "+Character.MIN_VALUE);
	}

	public static void findFirstNonRepeatedCharacter(String s) {
		Map<Character, Integer> map = new HashMap<>();

		for(char c : s.toCharArray()) {

			if(!map.containsKey(c)) {
				map.put(c, 1);
			}
			else {
				map.put(c, map.get(c) + 1);
			}
		}

		for(char c : s.toCharArray()) {
			if(map.get(c) == 1) {
				System.out.println("First non repeated character : "+c);

				return;
			}
			//if(map.get(c) > 1) return c; // first repeated character
		}

		System.out.println("First non repeated character : "+Character.MIN_VALUE);
	}

	public static void firstMostRepeatedCharacter(String s) {
		Map<Character, Integer> map = new HashMap<>();
		int count = 0;
		int maximum = 0;
		char character = Character.MIN_VALUE;

		for(char c : s.toCharArray()) {

			if(!map.containsKey(c)) {
				map.put(c, 1);
			}
			else {
				map.put(c, map.get(c) + 1);
			}
		}

		for(char c : s.toCharArray()) {
			count = map.get(c);


			if(count > maximum) {
				maximum = count;

				character = c;
			}
		}

		System.out.println("First most repeated character : "+character);
	}

	public static void main(String[] args) {
		String s = "a green applea";

		findFirstRepeatedCharacter(s);
		findFirstNonRepeatedCharacter(s);
		firstMostRepeatedCharacter(s);
	}
}