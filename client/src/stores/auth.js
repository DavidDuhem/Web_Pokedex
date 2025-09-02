import { writable } from "svelte/store";
import { getCookie, isTokenValid } from "../utils/tokenValidation.js";

const currentToken = getCookie("token");
export const token = writable(currentToken);

const initial = isTokenValid(currentToken);
export const isLoggedIn = writable(initial);

const currentProfileId = parseInt(getCookie("profileId"), 10);
export const profileId = writable(
    !isNaN(currentProfileId) ? currentProfileId : null
);
