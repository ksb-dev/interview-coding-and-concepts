import java.util.*;

public class TestLinkedList {
	public static void main(String[] args) {
		LinkedList list = new LinkedList();

		list.addLast(10);
		list.addLast(20);
		list.addLast(30);


		list.addFirst(40);
		list.addFirst(50);
		list.addFirst(60);
		list.addFirst(70);

		list.print();

		System.out.println("--------");

		System.out.println("Index of 10 is : "+list.indexOf(10));
		System.out.println("Is Linked List contains 0 : "+list.contains(0));

		System.out.println("--------");

		System.out.println("Linked List after removing first node");
		list.removeFirst();
		list.print();

		System.out.println("--------");

		System.out.println("Linked List after removing last node");
	    list.removeLast();
		list.print();

		System.out.println("--------");

		System.out.println("Size of Linked List is : "+list.size());

		System.out.println("--------");

		System.out.println("After converting Linked List to Array");
		System.out.println(Arrays.toString(list.toArray()));

		System.out.println("--------");

		System.out.println("After reversing Linked List");
		list.reverse();
		list.print();

		System.out.println("--------");

		System.out.println("k th node from last : "+list.getKthNodeFromEndInOnePass(2));

		System.out.println("--------");

		//list.addLast(100);
		list.findMiddle();
	}
}