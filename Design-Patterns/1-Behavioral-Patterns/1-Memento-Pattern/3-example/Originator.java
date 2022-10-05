public class Originator {
    private Document document;

    public Document getDocument() {
		return document;
	}

	public void setDocument(Document document) {
		this.document = document;
	}

    public Memento createMemento() {
        return new Memento(document);
    }

    public void restoreMemento(Memento m) {
        document = m.getDocument();
    }
}
