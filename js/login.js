var ref = new Firebase("https://followers.firebaseio.com");
ref.authWithOAuthRedirect("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});