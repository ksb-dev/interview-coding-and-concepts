import java.util.*;

public class Tree {

	public class Node {
		int data;
		Node left;
	    Node right;

	    Node(int data) {
			this.data = data;
		}
	}

	Node root;

	// Insert Node

	public void insert(int data) {
		if(root == null) {
			root = new Node(data);
			return;
		}

		Node current = root;

		while(true) {
			if(data < current.data) {

				if(current.left == null) {
					current.left = new Node(data);
					break;
				}
				current = current.left;
			}
			else {
				if(current.right == null) {
					current.right = new Node(data);
					break;
				}
				current = current.right;
		    }
		}
	}

	// Find Node

	public boolean find(int data) {
		Node current = root;

		while(current != null) {

			if(data < current.data) {

				current = current.left;
			}
			else if(data > current.data) {
				current = current.right;
		    }
		    else {
				return true;
			}
		}
		return false;
	}

    // Pre-order Traversal

	public void preOrderTraversal(Node root) {
		if(root == null) return;

		System.out.print(root.data+" ");

		preOrderTraversal(root.left);
		preOrderTraversal(root.right);
	}

	// In-order Traversal

	public void inOrderTraversal(Node root) {
		if(root == null) return;

		inOrderTraversal(root.left);

		System.out.print(root.data+" ");

		inOrderTraversal(root.right);
	}

	// Post-order Traversal

	public void postOrderTraversal(Node root) {
		if(root == null) return;

		postOrderTraversal(root.left);
		postOrderTraversal(root.right);

		System.out.print(root.data+" ");
	}

	// Level-order Traversal (BFS)

	public void levelOrderTraversal(Node root) {
		for(int i = 0; i <= height(root); i++) {
			NodesAtKDistanceFromRoot(root, i);
		}
	}

	// Height of a tree

	public int height(Node root) {
		if(root == null) return 0;

		int left = height(root.left);
		int right = height(root.right);

		return Math.max(left, right) + 1;
	}

	// Minimum node in a binary search tree O(log n)

	public int minimumInBinarySearchTree(Node root) {
		if(root == null) return -1;

		Node current = root;
		Node last = current;

		while(current != null) {
			last = current;
			current = current.left;
		}

		return last.data;
	}

	// Maximum node in a binary search tree O(log n)

	public int maximumInBinarySearchTree(Node root) {
		if(root == null) return -1;

		Node current = root;
		Node last = current;

		while(current != null) {
			last = current;
			current = current.right;
		}

		return last.data;
	}

	// Minimum node in a binary tree O(n)

	public int minimum(Node root) {
		if(root == null) return Integer.MAX_VALUE;

		int result = root.data;
		int leftResult = minimum(root.left);
		int rightResult = minimum(root.right);

		if(leftResult < result) result = leftResult;

		if(rightResult < result) result = rightResult;

		return result;
	}

	// Find both trees are identical

	public boolean equals(Node root1, Node root2) {
		//if(root2 == null) return false;

		if(root1 == null && root2 == null) return true;

		if(root1 != null && root2 != null)
		    return root1.data == root2.data
		    && equals(root1.left, root2.left)
		    && equals(root1.right, root2.right);

		return false;
	}

	public void swapNode() {
		Node temp = root.left;
		root.left = root.right;
		root.right = temp;
	}

	// Find tree is a binary search tree

	public boolean isBinarySearchTree(Node root, int min, int max) {
		if(root == null) return true;

		if(root.data < min || root.data > max) return false;

		return isBinarySearchTree(root.left, min, root.data - 1)
		&& isBinarySearchTree(root.right, root.data + 1, max);
	}

	// Print nodes at k distance from root

	public int NodesAtKDistanceFromRoot(Node root, int k) {
		int result = 0;

		if(root == null) return -1;

		if(k == 0) {
			System.out.print(root.data+" ");

			result = root.data;
		}


		result = NodesAtKDistanceFromRoot(root.left, k - 1);
		result = NodesAtKDistanceFromRoot(root.right, k - 1);

		return result;
	}

	// Size of a binary tree

	public int size(Node root) {
		//if(root != null) System.out.println("root : "+ root.data);
		if(root == null) return 0;

		//if(root.left != null && root.right != null) System.out.println("root.left : "+ root.left.data+" root.right : "+ root.right.data);
		int result = size(root.left) + size(root.right) + 1;
		//System.out.println(result);

		return result;
	}

	// Number of leaf nodes of a binary tree

	public int numberOfLeaves(Node root) {
		int count = 0;

		if(root == null) return 0;

		if(root.left == null && root.right == null) {
			return 1;
		}
		else {
		    return numberOfLeaves(root.left) + numberOfLeaves(root.right);
		}
	}
}