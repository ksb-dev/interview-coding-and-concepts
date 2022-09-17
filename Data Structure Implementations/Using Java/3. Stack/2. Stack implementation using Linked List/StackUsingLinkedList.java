class Node{
    int data;
    Node next;

    public Node(int data){
        this.data = data;
    }
}

public class StackUsingLinkedList {
    Node head = null;
    int size = 0;

    public int size(){
	    return size;
    }

    public boolean isEmpty() {
	    return head == null;
    }

    public void push(int data){
        Node x = new Node(data);

        if(size() == 0){
            head = x;
        }
        else{
            Node temp = head;
            x.next = temp;
            head = x;
        }
        size++;
    }

    public int pop(){
        if(size() == 0){
            System.out.println("Stack is Empty");
            return -1;
        }
        else{
            Node temp = head;
            head = head.next;
            size--;
            return temp.data;
        }

    }

    public int peek() {
		if (!isEmpty()) {
			return head.data;
		}
		else {
			System.out.println("Stack is empty");
			return -1;
		}
    }

    public void printStack(){
        Node current = head;

        while(current!= null){
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }


    public static void main(String[] args) {
        StackUsingLinkedList stack = new StackUsingLinkedList();
        stack.push(1);
        stack.push(2);
        stack.push(4);
        stack.printStack();
        System.out.println("Pop out element " + stack.pop());
        stack.printStack();
        System.out.println("Top element is " + stack.peek());
    }
}
