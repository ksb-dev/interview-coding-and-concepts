// Memento pattern is a behavioral design pattern.
// Memento pattern is used to restore state of an object to a previous state.

public class TestClass {
	public static void main(String[] args) {
		EditorOriginator editorOriginator = new EditorOriginator();
		HistoryCareTaker historyCareTaker = new HistoryCareTaker();

		editorOriginator.setContent("a");
		historyCareTaker.push(editorOriginator.createState());

		editorOriginator.setContent("b");
		historyCareTaker.push(editorOriginator.createState());

		editorOriginator.setContent("c");
		historyCareTaker.push(editorOriginator.createState());

		editorOriginator.restore(historyCareTaker.pop());
		//editorOriginator.restore(historyCareTaker.pop());

		System.out.println(editorOriginator.getContent());
	}
}