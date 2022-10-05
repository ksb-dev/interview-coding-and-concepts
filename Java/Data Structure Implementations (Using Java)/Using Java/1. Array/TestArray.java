public class TestArray {
	public static void main(String[] args) {
		Array numbers = new Array(3);

		numbers.insert(10);
		numbers.insert(20);
		numbers.insert(30);
		numbers.insert(40);

		numbers.print();
		System.out.println("-----\n");

		numbers.removeAt(3);

		numbers.print();
		System.out.println("-----\n");

		System.out.println("index of 20 : " +numbers.indexOf(20));
		System.out.println("-----\n");

		numbers.insertAt(12, 1);

		numbers.print();
		System.out.println("-----\n");
	}
}