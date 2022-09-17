import java.util.*;

class Pair{

    public int start;
    public int end;

    public Pair(int x, int y){

      this.start = x;
      this.end = y;

    }
}

class TestMergeOverlappingIntervals{

  static ArrayList<Pair> mergeIntervals(ArrayList<Pair> intervals) {

    if(intervals == null || intervals.size() == 0) {

      return null;

    }

    for(int i = 0; i < intervals.size(); i++){

		if(intervals.get(i).start > intervals.get(i).end){

			int temp = intervals.get(i).start;
			intervals.get(i).start = intervals.get(i).end;
			intervals.get(i).end = temp;

	    }

	}

    ArrayList<Pair> result = new ArrayList<Pair>();

    result.add(new Pair(intervals.get(0).start, intervals.get(0).end));

    for(int i = 1 ; i < intervals.size(); i++) {

      int x1 = intervals.get(i).start;
      int y1 = intervals.get(i).end;
      int x2 = result.get(result.size() - 1).start;
      int y2 = result.get(result.size() - 1).end;

      if(y2 >= x1){

        result.get(result.size() - 1).end = Math.max(y1, y2);

      }
      else{

        result.add(new Pair(x1, y1));

      }
    }

    return result;

  }
}

public class MergeOverlappingIntervals{

	public static void main(String[] args) {

		TestMergeOverlappingIntervals t = new TestMergeOverlappingIntervals();

	    ArrayList<Pair> intervals = new ArrayList<Pair>();

	    intervals.add(new Pair(5, 1));
	    intervals.add(new Pair(3, 7));
	    intervals.add(new Pair(4, 6));
	    intervals.add(new Pair(8, 6));
	    intervals.add(new Pair(10, 12));
	    intervals.add(new Pair(15, 11));

	    ArrayList<Pair> result = t.mergeIntervals(intervals);

	    for(int i=0; i < result.size(); i++){

	      System.out.print(String.format("[%d, %d] ", result.get(i).start, result.get(i).end));

	    }
    }
}