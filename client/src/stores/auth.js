import { writable } from "svelte/store";
import { getCookie, isTokenValid } from "../utils/tokenValidation.js";

export const token = writable(getCookie("token"));
const initial = isTokenValid(token);

export const isLoggedIn = writable(initial);
