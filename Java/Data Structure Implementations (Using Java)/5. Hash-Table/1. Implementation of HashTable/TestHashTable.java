public class TestHashTable {
	public static void main(String[] args) {
		HashTable hash = new HashTable();

		hash.put(1, "Kedar");
		hash.put(2, "Tushar");
		hash.put(3, "Arijeet");
		hash.put(4, "Aarav");
		hash.put(5, "Satish");

		hash.put(6, "John");
		hash.put(7, "Anna");
		//hash.put(8, "Mathew");
		//hash.put(9, "Chris");
		//hash.put(10, "Allan");

		System.out.println("\n"+hash.get(1)+"\n");

		hash.print();

		hash.remove(6);

		System.out.println("\nAfter removing some entries\n");

		hash.print();

		//hash.remove(60);
	}
}