/***************************************************
 * Assuming you can't use priorities (e.g. they are already being used for something else)
 * You can store the email addresses in an index and use that to match them to user ids
 ***************************************************/
//<script src="https://cdn.firebase.com/js/client/2.1.0/firebase.js"></script>

var Firebase = require("firebase");
var ClassRef = new Firebase("https://followers.firebaseio.com/db_class/Deathknight_Blood");
ClassRef.on("value", function(ClassSnapshot) {
  var key = ClassSnapshot.val();  // key === "fred"
  console.log(key);
  //key = ClassSnapshot.child("name/last").name();  // key === "last"
  //test merong
});





/***************************************************
A.emit 'value', {}

A.on 'value', (d) ->
  Internet.post 'A:value', d\

Internet.on 'A:value', (d) ->
  a.emit 'value', d

A.on 'value', (d) ->
***************************************************/