var root_info = "https://followers.firebaseio.com/";
var ref = new Firebase(root_info);
var authData = ref.getAuth();

function getUserInfo () {
	var user_data = ref.child("db_user/" + authData.uid);
	console.log (user_data);
	if ( user_data.key() == null ) {
		var user_ref = new Firebase(root_info + "db_user/" + authData.uid);
		user_ref.child("locale").set("kor");
		user_ref.child("profile").set("profile_text");
		console.log (user_ref);
	}
	return user_ref;
}

if (authData) {
	console.log("User " + authData.uid + " is logged in with " + authData.provider);
	console.log("Authenticated successfully with payload:", authData);
	} else {
	ref.authWithOAuthRedirect("google", function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});
}

var userData = getUserInfo();




