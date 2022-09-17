public class TestQueueUsingLinkedList {
	public static void main(String[] args) {
		QueueUsingLinkedList queue = new QueueUsingLinkedList();

		queue.enqueue(10);
		queue.enqueue(20);
		queue.enqueue(30);
		queue.enqueue(40);
		queue.enqueue(50);

		queue.print();
		System.out.println("\nSize of queue is : "+queue.size());
		System.out.println("Peek of queue is : "+queue.peek());

		System.out.println("--------------------");

		System.out.println("Removed element is : "+queue.dequeue());
		System.out.println("Removed element is : "+queue.dequeue());

		System.out.println("--------------------");

		queue.print();
		System.out.println("\nSize of queue is : "+queue.size());
		System.out.println("Peek of queue is : "+queue.peek());
	}
}