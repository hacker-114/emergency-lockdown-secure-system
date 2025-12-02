// Called when Google Sign-In succeeds
function onSignIn(googleUser) {
  // Get profile info
  const profile = googleUser.getBasicProfile();
  const email = profile.getEmail().toLowerCase();

  console.log("Signed in as: " + email);

  // Check domain and redirect
  if (email.endsWith("@evergreenps.org")) {
    window.location.href = "https://hacker-114.github.io/red-alert";
  } else if (email.endsWith("@student.evergreenps.org")) {
    window.location.href = "https://sites.google.com/student.evergreenps.org/rebellion/";
  } else {
    alert("Email not recognized. Please use your Evergreen email.");
  }
}
