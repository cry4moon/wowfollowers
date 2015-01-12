/** @jsx React.DOM */
var TodoList2 = React.createClass({
  render: function() {
    var createItem = function(item, index) {
      return <li key={ index }>{ item.text }</li>;
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});

var TodoApp2 = React.createClass({
  getInitialState: function() {
    this.items = [];
    return {items: [], text: ""};
  },

  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://ReactFireTodoApp.firebaseio.com/items/");
    this.firebaseRef.limitToLast(25).on("child_added", function(dataSnapshot) {
      // Only keep track of 25 items at a time
      if (this.items.length === 25) {
        this.items.splice(0, 1);
      }

      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.firebaseRef.off();
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRef.push({
        text: this.state.text
      });
      this.setState({text: ""});
    }
  },

  render: function() {
    return (
      <div>
        <TodoList2 items={ this.state.items } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.text } />
          <button>{ "Add #" + (this.state.items.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp2 />, document.getElementById("todoApp2"));
