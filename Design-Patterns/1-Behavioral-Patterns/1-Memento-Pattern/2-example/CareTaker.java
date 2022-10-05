import java.util.List;
import java.util.ArrayList;

public class CareTaker {
    private List<Memento> tvList= new ArrayList<>();

    public void addMemento(Memento m) {
        tvList.add(m);
        //System.out.println("LED TV's snapshots Maintained by CareTaker :" + tvList);
    }

    public Memento removeMemento() {
		int lastIndex = tvList.size() - 1;
		Memento lastState = tvList.get(lastIndex);

		tvList.remove(lastState);

		return lastState;
	}
}
