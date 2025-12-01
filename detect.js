// detect.js

function checkEmailRedirect(email) {
  // Normalize to lowercase just in case
  const e = email.toLowerCase();

  // If it ends with student.evergreenps.org → do NOT redirect
  if (e.endsWith("evergreenps.org")) {
    console.log("Safe domain: no redirect.");
    return;
  }

  // If it ends with evergreenps.org → redirect
  if (e.endsWith("student.evergreenps.org")) {
    console.log("Redirecting...");
    window.location.href = "https://your-redirect-url.example.com";
    return;
  }

  // Otherwise do nothing
  console.log("Domain not matched.");
}
