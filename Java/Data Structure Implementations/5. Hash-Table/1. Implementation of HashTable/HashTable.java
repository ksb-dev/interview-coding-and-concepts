import java.util.*;

public class HashTable {

	private class Entry {

		private int key;
		private String value;

		Entry(int key, String value) {
			this.key = key;
			this.value = value;
		}
	}

	private LinkedList<Entry>[] entries = new LinkedList[5];

	public void put(int key, String value) {
		int index = hash(key);

		if(entries[index] == null) {
			entries[index] = new LinkedList<>();
		}

		LinkedList<Entry> bucket = entries[index];

		for(Entry entry : bucket) {

			if(entry.key == key) {
				entry.value = value;

				return;
			}
		}

		bucket.addLast(new Entry(key, value));
	}

	public String get(int key) {
		int index = hash(key);

		LinkedList<Entry> bucket = entries[index];

		if(bucket == null) {
			return "\nBucket "+ index + " is empty\n";
		}

		for(Entry entry : bucket) {

			if(entry.key == key) {

				return entry.value;
			}
		}

		return "Entry not found!";
	}

	public void remove(int key) {
		int index = hash(key);

		LinkedList<Entry> bucket = entries[index];

		if(bucket == null) {
			System.out.println("\nBucket "+ index + " is empty\n");
			return;
		}

		for(Entry entry : bucket) {

			if(entry.key == key) {
				bucket.remove(entry);

				return;
			}
		}

		System.out.println("\nEntry not found!\n");
	}

	public int hash(int key) {
		return Math.abs(key % entries.length);
	}

	public void print() {
		for(int i = 0; i < entries.length; i++) {

			System.out.println("Index : "+ i+"\n");

			for(Entry entry : entries[i]) {

				System.out.print(entry.key+" -- "+entry.value+" ");
		    }

		    System.out.println("\n--------------\n");
		}
	}
}