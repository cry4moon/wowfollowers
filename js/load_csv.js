
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

// tutorial2.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});