window.onload = function() {
  let input = "evergreenps.org"; // could be just domain or full email

  // If it contains "@", treat it like an email
  if (input.includes("@")) {
    if (input.endsWith("evergreenps.org")) {
      window.location.href = "https://myapps.classlink.com/";
    }
  } else {
    // Otherwise, compare directly as a domain
    if (input === "evergreenps.org") {
      window.location.href = "https://myapps.classlink.com/";
    }
  }
};
