import java.util.*;

public class Array {
	private int[] items;
	int count;

	public Array(int length) {
		items = new int[length];
	}

	public void insert(int item) {

		// If the array is full resize it.
		if(items.length == count) {

			// Create a new array (twice the size)
			int[] newItems = new int[count * 2];

			// Copy all existing elements
			for(int i = 0; i < count; i++)
				newItems[i] = items[i];

			// Set "items" to this new array
			items = newItems;
		}

		// Add the new item at the end
		items[count] = item;
		count++;
	}

	public void insertAt(int item, int index) {
		if(index >= items.length) throw new ArrayIndexOutOfBoundsException();

		items[index] = item;
	}

	public void removeAt(int index) {
		if(index < 0 || index >= count)
		     throw new IllegalArgumentException();

		for(int i = index; i < count; i++)
		    items[i] = items[i+1];

		count--;
	}

	public int indexOf(int item) {
		for(int i = 0; i < count; i++) {
			if(items[i] == item) return i;
		}

		return -1;
	}

	public void print() {
		for(int i = 0; i < count; i++) {
			System.out.println(items[i]);
		}
	}
}