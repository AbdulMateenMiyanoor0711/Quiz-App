import Cookies from "js-cookie";
function setCookie(token) {
  const isSecure = typeof window !== 'undefined' && window.location && window.location.protocol === 'https:';
  Cookies.set("authToken", token, {
    expires: 7,
    secure: isSecure,
    sameSite: "Strict",
  });
}

function getCookies() {
  const token = Cookies.get("authToken");
  if (!!token) {
    return true;
  } else {
    return false;
  }
}

function clearCookies() {
  Cookies.remove("authToken");
}

export default {
  setCookies: setCookie,
  getCookies: getCookies,
  clearCookies: clearCookies,
};
