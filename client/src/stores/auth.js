import { writable } from "svelte/store";
import { getCookie, isTokenValid } from "../utils/tokenValidation.js";

const currentToken = getCookie("token");
export const token = writable(currentToken);

const initial = isTokenValid(currentToken);
export const isLoggedIn = writable(initial);

export const profileId = writable(null);
