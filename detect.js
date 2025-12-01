window.onload = function() {
  const email = "teacher@student.evergreenps.org";

  if (email.endsWith("evergreenps.org")) {
    window.location.href = "https://sites.google.com/student.evergreenps.org/rebel/";
  } else if (email.endsWith("student.evergreenps.org")) {
    window.location.href = "https://myapps.classlink.com/";
  } else {
    console.log("No matching domain, staying here.");
  }
};
