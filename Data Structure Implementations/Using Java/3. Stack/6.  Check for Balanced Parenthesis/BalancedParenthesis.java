import java.util.*;

public class BalancedParenthesis {
	public static boolean check(String s) {
		Stack<Character> stack = new Stack<>();

		for (int i = 0; i < s.length(); i++) {
			char x = s.charAt(i);

			if (x == '(' || x == '[' || x == '{' || x == '<') {
				stack.push(x);
				continue;
			}

			if (stack.isEmpty())
				return false;

			char check;

			switch (x) {
				case ')':
					check = stack.pop();
					if (check == '{' || check == '[' || check == '<')
						return false;
					break;

				case '}':
					check = stack.pop();
					if (check == '(' || check == '[' || check == '<')
						return false;
					break;

				case ']':
					check = stack.pop();
					if (check == '(' || check == '{' || check == '<')
						return false;
					break;
				case '>':
					check = stack.pop();
					if (check == '(' || check == '{' || check == '[')
						return false;
					break;
			}
		}

        return (stack.isEmpty());
	}
	public static void main(String[] args) {
		//String s = "(([a]+ <b>)[<[]>])";
		String s = "[(])";

		System.out.println(check(s));
	}
}