import java.util.*;

public class StackUsingTwoQueue<T> {
	Queue<Integer> q1;
	Queue<Integer> q2;
	int size;

	public StackUsingTwoQueue() {
		q1 = new LinkedList<>();
	    q2 = new LinkedList<>();
	}

	public boolean isEmpty() {
		return size == 0;
	}

	public int size() {
		return size;
	}

	public void push(int value) {
		while (!q1.isEmpty()) {
			q2.add(q1.remove());
		}

		q1.add(value);

		while (!q2.isEmpty()) {
			q1.add(q2.remove());
        }
        size++;
	}

	public int pop() {
		if(q1.isEmpty()) return -1;

		size--;

		return q1.remove();
	}

	public int peek() {
		if(q1.isEmpty()) return -1;

		return q1.peek();
	}

	public void print() {
		System.out.println(q1);
	}
}