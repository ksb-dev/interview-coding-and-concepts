public class TestAVLTree {
	public static void main(String[] args) {
		AVLTree t = new AVLTree();

		/*t.insert(10);
		t.insert(20);
		t.insert(30);*/

		/*t.insert(30);
		t.insert(20);
		t.insert(10);*/

		t.insert(15);
		t.insert(5);
		t.insert(10);

		/*t.insert(10);
		t.insert(20);
		t.insert(15);*/

		//t.print();

		t.isBalanced();
	}
}