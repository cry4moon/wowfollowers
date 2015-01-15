var ref = new Firebase("https://followers.firebaseio.com");
var authData = ref.getAuth();
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




