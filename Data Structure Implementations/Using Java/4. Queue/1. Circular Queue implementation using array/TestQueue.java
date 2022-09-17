public class TestQueue {
	public static void main(String[] args) {
		ArrayQueue queue = new ArrayQueue(5);

		queue.enqueue(10);
		queue.enqueue(20);
		queue.enqueue(30);
		queue.enqueue(40);
		queue.enqueue(50);

		queue.print();

		//queue.enqueue(60);

		queue.dequeue();
		queue.dequeue();

		queue.print();

		queue.enqueue(60);
		queue.enqueue(70);

		queue.print();

		//queue.enqueue(80);

		queue.dequeue();
		queue.dequeue();

		queue.print();

		System.out.println(queue.peek());
	}
}