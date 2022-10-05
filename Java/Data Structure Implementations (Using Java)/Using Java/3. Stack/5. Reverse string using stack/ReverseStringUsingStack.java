import java.util.*;

public class ReverseStringUsingStack {
	public static void main(String[] args) {
		String s = "abcd";
		StringBuffer r = new StringBuffer();
		int length = s.length();

		Stack<Character> stack = new Stack<>();

		for(int i = 0; i < length; i++) {
			stack.push(s.charAt(i));
		}

		while(!stack.empty()) r.append(stack.pop());

		System.out.println(r);
	}
}