public class TestQueueUsingStack {
	public static void main(String[] args) {
		QueueUsingStack queue = new QueueUsingStack();

		queue.enqueue(10);
		queue.enqueue(20);
		queue.enqueue(30);
		queue.enqueue(40);
		queue.enqueue(50);
		//queue.enqueue(60);

		queue.print();

		queue.dequeue();
		queue.dequeue();
		queue.dequeue();

		queue.print();

		queue.enqueue(10);

		queue.print();
	}
}