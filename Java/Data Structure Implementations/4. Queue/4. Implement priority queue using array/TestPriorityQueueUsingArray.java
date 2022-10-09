public class TestPriorityQueueUsingArray {
	public static void main(String[] args) {
		PriorityQueueUsingArray queue = new PriorityQueueUsingArray(5);

        queue.insert(10);
        queue.insert(30);
        queue.insert(20);
        queue.insert(40);
		queue.insert(5);
        //queue.insert(20);

        queue.print();

        System.out.println(queue.remove());

        queue.print();
	}
}