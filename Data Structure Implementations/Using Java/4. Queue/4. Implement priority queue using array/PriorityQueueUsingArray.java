import java.util.*;

public class PriorityQueueUsingArray {
	int[] data;
	int count;

	public PriorityQueueUsingArray(int capacity) {
		data = new int[capacity];
		//count = data.length - 1;
	}

	public boolean isEmpty() {
	    return count == 0;
	}

	public boolean isFull() {
		return count == data.length;
	}

	public void insert(int x) {
		if(isFull()) throw new IllegalStateException();

		int i;

		// Shifting
		for(i = count - 1; i >= 0; i--) {

			if(data[i] > x) {
				data[i + 1] = data[i];
			}
			else {
				break;
			}
		}

		data[i + 1] = x;
        count++;
	}

	public int remove() {
		if(isEmpty()) throw new IllegalStateException();

		int removedElement = data[--count];
		data[count] = 0;

		return removedElement;
	}


	public void print() {
		System.out.println(Arrays.toString(data));
	}
}