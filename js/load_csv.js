
var test = read.fromCSV('class_test.csv')
for (var k,v in test) {
	//Firebase.put(k,v);
}


import au.com.bytecode.opencsv.CSVReadProc;
import java.util.Arrays;

/** React + ReactFire @jsx React.DOM */
var data = csv.read("class_test.csv", new CSVReadProc() {
	public void procRow(int rowIndex, String... values) {
		System.out.println(rowIndex + ": " + Arrays.asList(values));
	}
});

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
  
);

