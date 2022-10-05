public class TestTree {
	public static void main(String[] args) {
		Tree tree = new Tree();
		Tree tree2 = new Tree();

		tree.insert(7);
		tree.insert(4);
		tree.insert(9);
		tree.insert(1);
		tree.insert(6);
		tree.insert(8);
		tree.insert(10);

		tree2.insert(7);
		tree2.insert(4);
		tree2.insert(9);
		tree2.insert(1);
		tree2.insert(6);
		tree2.insert(8);
		tree2.insert(10);

		//System.out.println(tree.find(8));

		System.out.print("Pre-Order Traversal : ");
	    tree.preOrderTraversal(tree.root);
		System.out.println("\n");

		System.out.print("In-Order Traversal : ");
		tree.inOrderTraversal(tree.root);
		System.out.println("\n");

		System.out.print("Post-Order Traversal : ");
		tree.postOrderTraversal(tree.root);
		System.out.println("\n");

		System.out.print("Height of a tree : "+tree.height(tree.root));
		System.out.println("\n");

		System.out.print("Minimum node of a tree : "+tree.minimum(tree.root));
		System.out.println("\n");

		System.out.print("Maximum node of a binary search tree : "+tree.maximumInBinarySearchTree(tree.root));
		System.out.println("\n");

		System.out.print("Equality of trees : "+tree.equals(tree.root, tree2.root));
		System.out.println("\n");

		//tree.swapNode();
		System.out.print("Is tree a binary search tree : "+tree.isBinarySearchTree(tree.root, Integer.MIN_VALUE, Integer.MAX_VALUE));
		System.out.println("\n");

		int k = 2;
		System.out.print("Nodes at "+ k +" distance from root : ");
		tree.NodesAtKDistanceFromRoot(tree.root, k);
		System.out.println("\n");

		System.out.print("Level order traversal : ");
		tree.levelOrderTraversal(tree.root);
		System.out.println("\n");

		System.out.print("Size of a binary tree : "+tree.size(tree.root));
		System.out.println("\n");

		System.out.print("Number of leaves in a binary tree : "+tree.numberOfLeaves(tree.root));
		System.out.println("\n");
	}
}