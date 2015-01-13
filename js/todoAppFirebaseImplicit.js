/** React + ReactFire @jsx React.DOM */

var ClassTable = React.createClass({
  render: function() {
    var createItem = function(item, index) {
      return <tr key={item.id}><td>{item.직업}</td><td>{item.전문화}</td></tr>;
    };
    return <table>{ this.props.items.map(createItem) }</table>;
  }
});

var ClassApp = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {items: [], text: ""};
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
        <ClassTable items={ this.state.items } />
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.onChange } value={ this.state.text } />
          <button>{ "Add #" + (this.state.items.length + 1) }</button>
        </form>
      </div>
    );
  }
});

React.render(<ClassApp />, document.getElementById("class_view"));