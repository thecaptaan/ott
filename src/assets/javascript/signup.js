let signed = getCookie("logged");
const signupModal = document.getElementById("signupModal");
console.log(signed)
if (signed == "true") {
  signupModal.style.display = "none";
console.log(signed)

} else {
console.log(signed)
  signupModal.style.display = "block";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
