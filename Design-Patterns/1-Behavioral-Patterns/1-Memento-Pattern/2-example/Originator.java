public class Originator {
    private LedTV ledTV;

    public LedTV getLedTV() {
		return ledTV;
	}

	public void setLedTV(LedTV ledTV) {
		this.ledTV = ledTV;
	}

    public Memento createMemento() {
        return new Memento(ledTV);
    }

    public void restoreMemento(Memento m) {
        ledTV = m.getLedTV();
    }

    // @Override
    // public String toString() {
	//     return "Originator [ledTV=" + ledTV + "]";
    // }
}
