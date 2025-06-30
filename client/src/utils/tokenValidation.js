import { jwtDecode } from "jwt-decode";

export function getCookie(name) {
  if (typeof document !== "undefined") {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  return null;
}

export function isTokenValid(token) {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    if (!decoded.exp) return false;

    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch (error) {
    return false;
  }
}
