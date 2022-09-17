import java.util.*;

public class ReverseQueue {
	public static void reverse(Queue<Integer> queue) {
		System.out.println("Queue before reverse operation : "+ queue);

		Stack<Integer> stack = new Stack<>();

		while(!queue.isEmpty())
		    stack.push(queue.remove());

		while(!stack.isEmpty())
		    queue.add(stack.pop());

		System.out.println("Queue after reverse operation : "+ queue);
	}

	public static void main(String[] args) {
		Queue<Integer> queue = new ArrayDeque<>();
		queue.add(10);
		queue.add(20);
		queue.add(30);

		reverse(queue);
	}
}