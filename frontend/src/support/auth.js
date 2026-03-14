import Cookies from "js-cookie";
function setCookies(token) {
  Cookies.set("authToken", token, {
    expires: 7, // days
    secure: true, // HTTPS only (important in production)
    sameSite: "strict", // protects against CSRF
  });
}

function getCookies() {
  const token = Cookies.get("authToken");
  if (!!token) {
    // logic
    // api -> validUser -> token -> sesion table -> valid_till
    return true;
  } else {
    return false;
  }
}

function clearCookies() {
  Cookies.remove("authToken");
 
}

export default {
  setCookies,
  getCookies,
  clearCookies,
};
