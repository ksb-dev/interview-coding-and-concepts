import java.util.*;

public class LinkedList {

	private class Node {
		private int value;
		private Node next;

		public Node(int value) {
			this.value = value;
	    }
    }

	private Node first;
	private Node last;
	private int size;

	public void addFirst(int value) {
		Node node = new Node(value);

		if(first == null)
			first = last = node;
		else {
		   node.next = first;
		   first = node;
	   }

	   size++;
	}

	public void addLast(int value) {
		Node node = new Node(value);

		if(first == null)
		    first = last = node;
		else {
		   last.next = node;
		   last = node;
	   }

	   size++;
	}

	public int size() {
		/*int length = 0;

		Node temp = first;

		while(temp != null) {
			temp = temp.next;
			length++;
		}
		return length;*/

		return size;
	}

	public int indexOf(int item) {
		int index = 0;
		Node current = first;

		while(current != null) {
			if(current.value == item) return index;

			current = current.next;
			index++;
		}
		return -1;
	}

	public boolean contains(int item) {
		return indexOf(item) != -1;
	}

	public void removeFirst() {
		if(first == null) throw new NoSuchElementException();

		if(first == last) {
			first = last = null;
			size = 0;
			return;
		}

		Node current = first.next;
		first.next = null;
		first = current;

		size--;
	}

	public void removeLast() {
		if(first == null) throw new NoSuchElementException();

		if(first == last) {
			first = last = null;
			size = 0;
			return;
		}

		Node current = first;

		while(current != null) {
			if(current.next == last) break;

			current = current.next;
		}

		last = current;
		current.next = null;

		size--;
	}

	public int[] toArray() {
		int[] array = new int[size];
		int index = 0;

		Node current = first;

		while(current != null) {
			array[index++] = current.value;
			current = current.next;
		}

		return array;
	}

	public void reverse() {
		if(first == null) return;

		Node previous = first;
		Node current = first.next;

		while(current != null) {
			Node next = current.next;

			current.next = previous;
			previous = current;
			current = next;
		}

		last = first;
		last.next = null;
		first = previous;
	}

	public int getKthNodeFromEndInOnePass(int k) {
		if( first == null || k > size() || k < 1) throw new IllegalArgumentException();

		Node a = first;
		Node b = first;

		for(int i = 0; i < k -1; i++) {
			b = b.next;
		}

		while (b != last) {
			a = a.next;
			b = b.next;

			//if(b == null) throw new IllegalArgumentException();
		}

		return a.value;
	}

	public void findMiddle() {
		Node slow = first;
		Node fast = first;

		while(slow != null && fast != null && fast.next != null) {
			slow = slow .next;
			fast = fast.next.next;
		}

		if(fast == last)
		    System.out.println("Middle of Linked List is : "+slow.value);
		else
		    System.out.println("Middle of Linked List is : "+slow.value+" and "+slow.next.value);
	}

	public boolean detectLoop() {

		// Floyd’s Cycle-Finding Algorithm

		/*if(first == null) return false;

		if(first == last) return false;

		Node slow = first;
		Node fast = first;

		while (slow != null && fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;

			if (slow == fast) {
				return true;
			}
        }
        return false;*/

        // Using Hashing

        HashSet<Node> s = new HashSet<Node>();
        Node h = first;

		while (h != null) {
			if (s.contains(h))
				return true;

			s.add(h);

			h = h.next;
		}

        return false;
	}

	public void print() {
		Node current = first;

		System.out.print("LinkedList: ");

		while (current != null) {
			System.out.print(current.value + " ");

			current = current.next;
        }

        System.out.println();
	}
}