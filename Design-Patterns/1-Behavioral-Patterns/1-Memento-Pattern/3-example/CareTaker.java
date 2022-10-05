import java.util.List;
import java.util.ArrayList;

public class CareTaker {
    private List<Memento> documents = new ArrayList<>();

    public void addMemento(Memento document) {
        documents.add(document);
    }

    public Memento removeMemento() {
		int lastIndex = documents.size() - 1;
		Memento lastState = documents.get(lastIndex);

		documents.remove(lastState);

		return lastState;
	}
}
