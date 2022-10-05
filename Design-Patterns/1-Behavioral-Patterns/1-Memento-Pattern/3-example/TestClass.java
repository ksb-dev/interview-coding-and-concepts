public class TestClass {
    public static void main(String[] args) {
		Originator originator = new Originator();
        CareTaker caretaker = new CareTaker();

		originator.setDocument(new Document("file-1", "helvatica", "10"));
		caretaker.addMemento(originator.createMemento());

        originator.setDocument(new Document("file-2", "cursive", "12"));
		caretaker.addMemento(originator.createMemento());

        originator.setDocument(new Document("file-3", "gothic", "8"));
		caretaker.addMemento(originator.createMemento());

		originator.restoreMemento(caretaker.removeMemento());
		originator.restoreMemento(caretaker.removeMemento());

		System.out.println(originator.getDocument());
	}
}
