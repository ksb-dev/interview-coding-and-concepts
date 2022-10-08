import java.util.*;

// 1. Insert Node

/* public class AVLTree {

	private class AVLNode {

		private int value;
		private AVLNode leftChild;
		private AVLNode rightChild;

		public AVLNode (int value) {
			this.value = value;
		}
	}

	private AVLNode root;

	public void insert(int value) {
		 root = insert(root, value);
	}

	private AVLNode insert(AVLNode root, int value) {
		// 1. If root == null create new root with passed value (Base Case)
		if(root == null)
		    return new AVLNode(value);

        // 2. If roo !== null compare passed value with root value, if value is smaller append it to left otherwise to right
		if(value < root.value)
		    root.leftChild = insert(root.leftChild, value);
		else
		    root.rightChild = insert(root.rightChild, value);

		System.out.println(root.value);

		return root;
	}

	public void print() {

		if (root == null)
			return;

		Stack<AVLNode> stack = new Stack<>();
		stack.push(root);

		while (!stack.isEmpty()) {
			AVLNode node = stack.pop();
			System.out.println("root --> "+node.value);

			if (node.rightChild != null) {
				System.out.println("right child --> "+node.rightChild.value);
				stack.add(node.rightChild);
			}

			if (node.leftChild != null) {
				System.out.println("left child --> "+node.leftChild.value);
				stack.add(node.leftChild);
			}

			System.out.println("----------------");
		}
	}
}*/


// 2. Calculate Height


/*public class AVLTree {

	private class AVLNode {

		private int value;
		private AVLNode leftChild;
		private AVLNode rightChild;
		private int height;

		public AVLNode (int value) {
			this.value = value;
		}
	}

	private AVLNode root;

	public void insert(int value) {
		 root = insert(root, value);
	}

	private AVLNode insert(AVLNode root, int value) {
		// 1. If root == null create new root with passed value (Base Case)
		if(root == null) {
		    return new AVLNode(value);
		}



        // 2. If roo !== null compare passed value with root value, if value is smaller append it to left otherwise to right
		if(value < root.value)
		    root.leftChild = insert(root.leftChild, value);
		else
		    root.rightChild = insert(root.rightChild, value);

		root.height = Math.max(
			height(root.leftChild),
			height(root.rightChild)) + 1;

        System.out.println("root "+ root.value);
	    System.out.println("height "+ root.height);
	    System.out.println("------------------");

		return root;
	}

	private int height(AVLNode node) {
		return (node == null) ? -1 : node.height;
	}

	public void print() {

		if (root == null)
			return;

		Stack<AVLNode> stack = new Stack<>();
		stack.push(root);

		while (!stack.isEmpty()) {
			AVLNode node = stack.pop();
			System.out.println("root --> "+node.value);

			if (node.rightChild != null) {
				System.out.println("right child --> "+node.rightChild.value);
				stack.add(node.rightChild);
			}

			if (node.leftChild != null) {
				System.out.println("left child --> "+node.leftChild.value);
				stack.add(node.leftChild);
			}

			System.out.println("----------------");
		}
	}
}*/


// 3. Calculate Balance Factor


/*public class AVLTree {

	private class AVLNode {

		private int value;
		private AVLNode leftChild;
		private AVLNode rightChild;
		private int height;

		public AVLNode (int value) {
			this.value = value;
		}
	}

	private AVLNode root;

	public void insert(int value) {
		 root = insert(root, value);
	}

	private AVLNode insert(AVLNode root, int value) {
		// 1. If root == null create new root with passed value (Base Case)
		if(root == null) {
		    return new AVLNode(value);
		}



        // 2. If roo !== null compare passed value with root value, if value is smaller append it to left otherwise to right
		if(value < root.value)
		    root.leftChild = insert(root.leftChild, value);
		else
		    root.rightChild = insert(root.rightChild, value);

		root.height = Math.max(
			height(root.leftChild),
			height(root.rightChild)) + 1;

        balance(root);

		return root;
	}

	private void balance(AVLNode root) {
		int balanceFactor = height(root.leftChild) - height(root.rightChild);

		if(balanceFactor > 1) {
			if(root.leftChild == null) {
				return;
			}
			else if(height(root.leftChild.leftChild) - height(root.leftChild.rightChild) < 0) {
				System.out.println("Left rotate "+ root.leftChild.value);
			}

			System.out.println("Right rotate "+ root.value);
		}
		else if(balanceFactor < -1) {
			if(root.rightChild == null) {
				return;
			}
			else if(height(root.rightChild.leftChild) - height(root.rightChild.rightChild) > 0) {
				System.out.println("Right rotate "+ root.rightChild.value);
			}

			System.out.println("Left rotate "+ root.value);
		}
	}

	private int height(AVLNode node) {
		return (node == null) ? -1 : node.height;
	}

	private int balanceFactor(AVLNode node) {
		return (node == null) ? -1 : height(root.leftChild) - height(root.rightChild);
	}

	public void print() {

		if (root == null)
			return;

		Stack<AVLNode> stack = new Stack<>();
		stack.push(root);

		while (!stack.isEmpty()) {
			AVLNode node = stack.pop();
			System.out.println("root --> "+node.value);

			if (node.rightChild != null) {
				System.out.println("right child --> "+node.rightChild.value);
				stack.add(node.rightChild);
			}

			if (node.leftChild != null) {
				System.out.println("left child --> "+node.leftChild.value);
				stack.add(node.leftChild);
			}

			System.out.println("----------------");
		}
	}
}*/


// 4. Rotate

public class AVLTree {

	private class AVLNode {

		private int value;
		private AVLNode leftChild;
		private AVLNode rightChild;
		private int height;

		public AVLNode (int value) {
			this.value = value;
		}
	}

	private AVLNode root;

	public void insert(int value) {
		 root = insert(root, value);
	}

	private AVLNode insert(AVLNode root, int value) {
		// 1. If root == null create new root with passed value (Base Case)
		if(root == null) {
		    return new AVLNode(value);
		}



        // 2. If roo !== null compare passed value with root value, if value is smaller append it to left otherwise to right
		if(value < root.value)
		    root.leftChild = insert(root.leftChild, value);
		else
		    root.rightChild = insert(root.rightChild, value);

		root.height = Math.max(
			height(root.leftChild),
			height(root.rightChild)) + 1;

        root = balance(root);

		return root;
	}

	private AVLNode balance(AVLNode root) {
		int balanceFactor = height(root.leftChild) - height(root.rightChild);

		if(balanceFactor > 1) {
			if(root.leftChild == null) {
				return root;
			}
			else if(height(root.leftChild.leftChild) - height(root.leftChild.rightChild) < 0) {
				//System.out.println("Left rotate "+ root.leftChild.value);
				root.leftChild = leftRotate(root.leftChild);
				//System.out.println("root --> " + root.value + " root.leftChild --> " + root.leftChild.value);
			}

			//System.out.println("Right rotate "+ root.value);

			AVLNode newRoot = rightRotate(root);
			//System.out.println("newRoot --> " + newRoot.value + " newRoot.leftChild --> " + newRoot.leftChild.value + " newRoot.rightChild --> " + newRoot.rightChild.value);
			return newRoot;
		}
		else if(balanceFactor < -1) {
			if(root.rightChild == null) {
				return root;
			}
			else if(height(root.rightChild.leftChild) - height(root.rightChild.rightChild) > 0) {
				//System.out.println("Right rotate "+ root.rightChild.value);
				root.rightChild = rightRotate(root.rightChild);
				//System.out.println("root --> " + root.value + " root.rightChild --> " + root.rightChild.value);
			}

			//System.out.println("Left rotate "+ root.value);

			AVLNode newRoot = leftRotate(root);
			//System.out.println("newRoot --> " + newRoot.value + " newRoot.leftChild --> " + newRoot.leftChild.value + " newRoot.rightChild --> " + newRoot.rightChild.value);
			return newRoot;
		}
		return root;
	}

	private int height(AVLNode node) {
		return (node == null) ? -1 : node.height;
	}

	private int balanceFactor(AVLNode node) {
		return (node == null) ? -1 : height(root.leftChild) - height(root.rightChild);
	}

	private AVLNode leftRotate(AVLNode root) {
		AVLNode newRoot = root.rightChild;
		root.rightChild = newRoot.leftChild;
		newRoot.leftChild = root;

		root.height = Math.max(
			height(root.leftChild),
			height(root.rightChild)) + 1;

	    newRoot.height = Math.max(
			height(newRoot.leftChild),
			height(newRoot.rightChild)) + 1;

	    return newRoot;
	}

	private AVLNode rightRotate(AVLNode root) {
		AVLNode newRoot = root.leftChild;
		root.leftChild = newRoot.rightChild;
		newRoot.rightChild = root;

		root.height = Math.max(
			height(root.leftChild),
			height(root.rightChild)) + 1;

		newRoot.height = Math.max(
			height(newRoot.leftChild),
			height(newRoot.rightChild)) + 1;

		return newRoot;
	}

	public void isBalanced() {
		int height = checkBalanced(root);

		if (height > 0) {
		    System.out.print("Tree is BALANCED & height is : "+height);
		}
		else {
            System.out.print("Tree is NOT BALANCED & height is : "+height);
		}
	}

	private int checkBalanced(AVLNode root) {
		System.out.println("----------------------");

		if (root == null)
			return 0;

		int leftHeight = checkBalanced(root.leftChild);

		System.out.println("left height :" + leftHeight);

		if (leftHeight == -1) {
			return -1;
		}

		int rightHeight = checkBalanced(root.rightChild);

		System.out.println("right height :" + rightHeight);

		if (rightHeight == -1) {
			return -1;
		}

		if (Math.abs(leftHeight - rightHeight) > 1) {
			return -1;
		}
		else {
		    return Math.max(leftHeight, rightHeight) + 1;
	    }
	}

	public void print() {

		if (root == null)
			return;

		Stack<AVLNode> stack = new Stack<>();
		stack.push(root);

		while (!stack.isEmpty()) {
			AVLNode node = stack.pop();
			System.out.println("root --> "+node.value);

			if (node.rightChild != null) {
				System.out.println("right child --> "+node.rightChild.value);
				stack.add(node.rightChild);
			}

			if (node.leftChild != null) {
				System.out.println("left child --> "+node.leftChild.value);
				stack.add(node.leftChild);
			}

			System.out.println("----------------");
		}
	}
}


