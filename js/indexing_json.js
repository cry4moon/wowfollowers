var TransformTable = React.createClass({
  render: function() {
    var transform = function(item, index) {
      return <tr key={ index }><td>{ item.val() }</td><td>{ item.from }</td></tr>;
      };
    return <table>{ table_info.map(transform) }</table>;
    }
});

var root_info = "https://followers.firebaseio.com/";

var table_info = {
  "tb_strings": { "from" : "tb_strings_upload/" },
  "tb_class": { "from" : "tb_class_upload/"}
};

var ClassRef = new Firebase("https://followers.firebaseio.com/Deathknight_Blood");
ClassRef.on("value", function(ClassSnapshot) {
  var key = ClassSnapshot.val();  // key === "fred"
  console.log(key);
  //key = ClassSnapshot.child("name/last").name();  // key === "last"
  //test merong
});

var TransformApp = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return <TransformTable items={ table_info } />;
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase("https://followers.firebaseio.com/db_test/");
    this.bindAsArray(firebaseRef.limitToLast(25), "items");
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs["items"].push({
        text: this.state.text
      });
      this.setState({text: ""});
    }
  },

  render: function() {
    return (
      <div>
        <TransformTable items={ table_info } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.text } />
          <button>{ "Add #" + (this.state.items.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<TransformApp />, document.getElementById("transform_view"));