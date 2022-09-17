import java.util.*;

public class TwoStackUsingArray {
	int[] data;
	int top1;
	int top2;

	public TwoStackUsingArray(int capacity) {
		data = new int[capacity];
		top1 = -1;
		top2 = capacity;
	}

	public int size1() {
		return top1 + 1;
	}

	public int size2() {
		return data.length - top2;
	}

	public void push1(int value) {
		if(top1 + 1 == top2) {
			throw new StackOverflowError();
		}
		else {
			top1++;
			data[top1] = value;
		}
	}

	public void push2(int value) {
		if(top1 + 1 == top2) {
			throw new StackOverflowError();
		}
		else {
			top2--;
			data[top2] = value;
		}
	}

	public int pop1() {
		if(size1() == 0) {
			throw new EmptyStackException();
		}
		else {
			int value = data[top1];
			top1--;
			return value;
		}
	}

	public int pop2() {
		if(size2() == 0) {
			throw new EmptyStackException();
		}
		else {
			int value = data[top2];
			top2++;
			return value;
		}
    }

    public int peek1() {
		if(size1() == 0) {
			throw new EmptyStackException();
		}
		else {
			int value = data[top1];
			return value;
		}
	}

	public int peek2() {
		if(size2() == 0) {
			throw new EmptyStackException();
		}
		else {
			int value = data[top2];
			return value;
		}
	}
}