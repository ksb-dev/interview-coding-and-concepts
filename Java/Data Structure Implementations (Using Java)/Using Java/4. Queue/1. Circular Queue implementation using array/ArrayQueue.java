import java.util.*;

public class ArrayQueue {
	private int [] data;
	private int front;
	private int rear;
	int size = 0;

	public ArrayQueue(int capacity) {
		this.data = new int[capacity];
		this.front = -1;
    	this.rear = 0;
	}

    boolean isFull() {
	    return (front == rear);
    }

    boolean isEmpty() {
		return (front == -1);
    }

	public boolean enqueue(int value) {
		if(isFull()) {
			return false;
		}
		else {
			data[rear] = value;

			if (front == -1) front = rear;

			rear = (rear + 1) % data.length;
			return true;
		}
	}

	public int dequeue() {
		if (isEmpty()) {
			System.out.printf("Queue is empty");
			return -1;
		}


        int element = data[front];
        front = (front + 1) % data.length;

        if (front == rear) front = -1;

        return element;
	}

	public int peek() {
		if (isEmpty()) return -1;

		return data[front];
	}

	public int Rear() {
	    if (isEmpty()) return -1;

	    return data[(rear - 1 + data.length) % data.length];
    }

	public void print() {
		System.out.println(Arrays.toString(data));
	}
}