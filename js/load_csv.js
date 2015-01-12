
/**
var test = read.fromCSV('class_test.csv')
for (var k,v in test) {
	//Firebase.put(k,v);
}


import au.com.bytecode.opencsv.CSVReadProc;
import java.util.Arrays;


var data = csv.read("class_test.csv", new CSVReadProc() {
	public void procRow(int rowIndex, String... values) {
		System.out.println(rowIndex + ": " + Arrays.asList(values));
	}
});
*/

// tutorial1-raw.js
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

