var root_info = "https://followers.firebaseio.com/";

var table_info = '{"table":[' +
'{"to":"tb_class/","from":"tb_class_upload/" },' +
'{"to":"tb_strings/","from":"tb_strings_upload/" }' +
']}';

obj = JSON.parse(table_info);

function logArrayElements(item, index) {
  var FromRef = new Firebase(root_info + item.from);
  FromRef.orderByChild("order").once('value', function(data_list) {
      data_list.forEach(function(data_row) {
      console.log(data_row.child("key").val());
    });
  });
}

// Note ellision, there is no member at 2 so it isn't visited

/**
var TransformTable = React.createClass({
  render: function() {
    var FromRef = new Firebase(root_info + item.from);
    var DataSet = FromRef.orderByChild("order").once('value', function(data_list) {
      data_list.forEach(function(data_row) {
      console.log(data_row.child("key").val());
    var transform = function(item, index) {
      return <tr key={ index }><td>{ item.val() }</td><td>{ item.from }</td></tr>;
      };
    return <table>{ table_info.map(transform) }</table>;
    return <table>{ obj.table.map(logArrayElements) }</table>;
    }
    var trans2 = function(item, index) {
      
    });
  });
}
*/

function trGen(item, index) {
  var FromRef = new Firebase(root_info + item.from);
  FromRef.orderByChild("order").once('value', function(data_list) {
      data_list.forEach(function(data_row) {
      console.log(data_row.child("key").val());
    });
  });
}

var TransformTable = React.createClass({
  render: function() {
    var FromRef = new Firebase(root_info + "tb_class/");
    return <table> {
      FromRef.orderByChild("order").once('value', function(data_list) {
        data_list.forEach(function(data_row) {
          <tr key={ data_row.child("order").val() }><td>{ data_row.key() }</td></tr>;
        });
      });
    } </table>;
  };
});




// Note ellision, there is no member at 2 so it isn't visited
//obj.table.map(logArrayElements);





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
          <button>{ "Add #" }</button>
        </form>
      </div>
    );
  }
});

React.render(<TransformApp />, document.getElementById("transform_view"));