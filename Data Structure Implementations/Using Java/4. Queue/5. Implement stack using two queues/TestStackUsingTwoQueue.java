public class TestStackUsingTwoQueue {
	public static void main(String[] rags) {
		StackUsingTwoQueue<Integer> s = new StackUsingTwoQueue<>();

		s.push(10);
		s.push(20);
		s.push(30);
		s.push(40);
		s.push(50);

		s.print();
		System.out.println("Size of stack is : "+s.size());
		System.out.println("Peek of stack is : "+s.peek());

		System.out.println("----------------");

		System.out.println("Popped element is : "+s.pop());

		System.out.println("----------------");

		s.print();
		System.out.println("Size of stack is : "+s.size());
		System.out.println("Peek of stack is : "+s.peek());
	}
}