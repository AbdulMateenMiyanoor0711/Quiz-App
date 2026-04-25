import Cookies from "js-cookie";
function setCookie(token) {
  Cookies.set("authToken", token, {
    expires: 7,
    secure: true,
    sameSite: "Strict",
  });
}

function getCookies() {
  const token = Cookies.get("authToken");
  // return true when a token exists (user is logged in)
  return !!token;
}

function clearCookies() {
  Cookies.remove("authToken");
  localStorage.removeItem("userId");
}

export default {
  setCookies: setCookie,
  getCookies: getCookies,
  clearCookies: clearCookies,
};
