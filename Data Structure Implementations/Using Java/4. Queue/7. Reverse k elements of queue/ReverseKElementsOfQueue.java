import java.util.*;

public class ReverseKElementsOfQueue {

	public static Queue<Integer> reverseByKUsingOneQueue(Queue<Integer> queue, int k) {

		Stack<Integer> stack = new Stack<>();
		int size = queue.size();

		if(size == 0 || size == 1 || k > size) return queue;

		for(int i = 0; i < k; i++) {
			stack.push(queue.remove());
		}

		while(!stack.isEmpty()) {
			queue.add(stack.pop());
		}

		for(int i = 0; i < size - k; i++) {
			queue.add(queue.remove());
		}

		return queue;
	}

	public static Queue<Integer> reverseByKUsingOneQueueAndStack(Queue<Integer> queue, int k) {

		Stack<Integer> stack = new Stack<>();
		Queue<Integer> q = new LinkedList<>();
		int size = queue.size();

		if(size == 0 || size == 1 || k > size) return queue;

		for(int i = 0; i < k; i++) {
			stack.push(queue.remove());
		}

		for(int i = k; i < size; i++){
			q.add(queue.poll());
		}

		for(int i = 0; i < k; i++) {
			queue.add(stack.pop());
		}

		for(int i = k; i < size; i++) {
			queue.add(q.remove());
		}

		return queue;
	}

	public static void main(String[] args) {
		Queue<Integer> queue = new LinkedList<>();
		queue.add(10);
		queue.add(20);
		queue.add(30);
		queue.add(40);
		queue.add(50);

		int k = 3;

		//reverseByKUsingOneQueueAndStack(queue, k);
		reverseByKUsingOneQueue(queue, k);

		System.out.println(queue);
	}
}