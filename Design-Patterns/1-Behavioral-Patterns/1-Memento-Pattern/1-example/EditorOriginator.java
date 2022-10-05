public class EditorOriginator {
	private String content;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public EditorStateMemento createState() {
		return new EditorStateMemento(content);
	}

	public void restore(EditorStateMemento state) {
		content = state.getContent();
	}
}