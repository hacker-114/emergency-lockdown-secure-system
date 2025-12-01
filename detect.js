// Demo function: checks if an email ends with a certain domain
function detectUserDomain(email) {
  if (email.endsWith("student.evergreenps.org")) {
    // Redirect if domain matches
    window.location.href = "https://myapps.classlink.com/";
  } else {
    // Otherwise, stay on the page or do nothing
    console.log("Domain not matched, staying here.");
  }
}

// Example usage: you could call this with a test email
// detectUserDomain("someone@evergreenps.org");
