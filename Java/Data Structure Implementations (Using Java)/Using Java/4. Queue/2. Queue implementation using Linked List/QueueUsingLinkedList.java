import java.util.*;

public class QueueUsingLinkedList {
	private class Node {
		int value;
		Node next;

		private Node(int value) {
			this.value = value;
			this.next = null;
		}
	}

	Node front;
	Node rear;
	int count;

	public QueueUsingLinkedList() {
		this.front = null;
		this.rear = null;
	}

	public boolean isEmpty() {
		return front == null && rear == null;
	}

	public int size() {
		return count;
	}

	public void enqueue(int value) {

		Node node = new Node(value);

		if(front == null) {
			front = node;
			rear = node;
		}
		else {
			rear.next = node;
			rear = node;
		}

		count++;
	}

	public int dequeue() {

		if(front == null) {
			System.out.println("Queue is empty");
			return -1;
		}

		Node node = front;
		front = front.next;

		if(front == null) rear = null;

		count--;

		return node.value;
	}

	public int peek() {

		if (front == null) {
			return -1;
		}

		return front.value;
    }

	public void print() {
		Node current = front;

		while(current != null) {
			System.out.print(current.value);

			if(current.next != null) System.out.print(" --> ");

			current = current.next;
		}
	}
}