
/**
var test = read.fromCSV('class_test.csv')
for (var k,v in test) {
	//Firebase.put(k,v);
}

*/
var data = read.fromCSV('class_test.csv')

/**
import au.com.bytecode.opencsv.CSVReadProc;
import java.util.Arrays;
var data = csv.read("class_test.csv", new CSVReadProc() {
	public void procRow(int rowIndex, String... values) {
		System.out.println(rowIndex + ": " + Arrays.asList(values));
	}
});
*/

// tutorial2.js
/**
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
*/


var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props[0]}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
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


// tutorial9.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);