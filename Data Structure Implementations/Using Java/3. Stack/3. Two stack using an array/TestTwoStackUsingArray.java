public class TestTwoStackUsingArray {
	public static void main(String[] args) {
		TwoStackUsingArray stack = new TwoStackUsingArray(5);

		stack.push1(10);
		stack.push1(20);
		stack.push1(30);

		stack.push2(40);
		stack.push2(50);

		System.out.println("Size of stack 1 : "+stack.size1());
		System.out.println("Size of stack 2 : "+stack.size2());

		System.out.println("Popped element from stack 1 is : "+stack.pop1());
		System.out.println("Popped element from stack 1 is : "+stack.pop2());

		System.out.println("Peek of stack 1 is : "+stack.peek1());
		System.out.println("Peek of stack 2 is : "+stack.peek2());

		stack.push1(30);
		stack.push2(50);

		//stack.push2(60);
	}
}