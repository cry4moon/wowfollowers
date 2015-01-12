/** @jsx React.DOM */

var ExampleComponent = React.createClass({
  mixins: [ReactFireMixin],
  ...
});

componentWillMount: function() {
  //this.bindAsArray(new Firebase("https://followers.firebaseio.com/db_class/"), "items");
  var ref = new Firebase("https://followers.firebaseio.com/db_class/");
  //var ClassRef = new Firebase("https://followers.firebaseio.com/db_class/Deathknight_Blood");
  this.bindAsArray(ref, "items");
  //this.bindAsObject(ref, "user");

}

/** My First Sample */
/**
componentWillMount: function() {
  this.firebaseRef = new Firebase("https://ReactFireTodoApp.firebaseio.com/items");
  this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val());
    this.setState({
      items: this.items
    });
  }.bind(this));
}
*/


/** Their First Sample */
var TodoList1 = React.createClass({
  render: function() {
    var createItem = function(item, index) {
      return <li key={ index }>{item.text}</li>;
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});

var TodoApp1 = React.createClass({
  getInitialState: function() {
    return {items: [], text: ""};
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text) {
      var nextItems = this.state.items.concat([{
        text: this.state.text
      }]);
      this.setState({
        items: nextItems,
        text: ""
      });
    }
  },

  render: function() {
    return (
      <div>
        <TodoList1 items={ this.state.items } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.text } />
          <button>{ "Add #" + (this.state.items.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp1 />, document.getElementById("todoApp1"));
