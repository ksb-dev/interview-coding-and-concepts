import java.util.*;

public class QueueUsingStack {
	Stack<Integer> stack;

	public QueueUsingStack() {
		stack = new Stack<>();
	}

	public void enqueue(int x) {
		stack.push(x);
	}

	public int dequeue() {
		Stack<Integer> temp = new Stack<>();

		while(!stack.isEmpty()){
			temp.push(stack.pop());
		}

		int ans = temp.pop();

		while(!temp.isEmpty()){
			stack.push(temp.pop());
		}

		return ans;
	}

	public int peek() {
		Stack<Integer> temp = new Stack<>();

		while(!stack.isEmpty()){
			temp.push(stack.pop());
		}

		int ans = temp.peek();

		while(!temp.isEmpty()){
			stack.push(temp.pop());
		}

		return ans;
	}

	public boolean empty() {
		return stack.isEmpty();
    }

	public void print() {
		System.out.println(stack);
	}
}