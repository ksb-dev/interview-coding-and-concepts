import java.util.*;

public class AVLTree {
	private class AVLNode {
		private int value;
		private AVLNode leftChild;
		private AVLNode rightChild;

		public AVLNode (int value) {
			this.value = value;
		}

		@Override
		public String toString() {
			return "value= " + this.value;
		}
	}

	private AVLNode root;

	public void insert(int value) {
		 root = insert(root, value);
		 //System.out.println(root.value);
	}

	private AVLNode insert(AVLNode root, int value) {
		if(root == null)
		    return new AVLNode(value);

		if(value < root.value)
		    root.leftChild = insert(root.leftChild, value);
		else
		    root.rightChild = insert(root.rightChild, value);

		return root;
	}

	public void print() {
		/*if (root == null)
			return;


		if (root.leftChild == null && root.rightChild == null)
		    System.out.printf("%d ", root.value);

		print(root.leftChild);
		print(root.rightChild);*/

		if (root == null)
		    return;

		Stack<AVLNode> stack = new Stack<>();
		stack.push(root);

		while (!stack.isEmpty()) {
			AVLNode node = stack.pop();
			System.out.println(node.value);

			if (node.rightChild != null) {
				stack.add(node.rightChild);
			}

			if (node.leftChild != null) {
				stack.add(node.leftChild);
			}

			if (node.leftChild == null && node.rightChild == null) {
				//System.out.printf("%d ", node.value);
				break;
			}
		}
	}
}