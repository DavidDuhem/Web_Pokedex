import BaseService from "./BaseService";
import { token } from "../stores/auth.js";

export default class AuthService extends BaseService {
  constructor(baseUrl) {
    super(baseUrl, "auth");
  }

  async login(data, fetchFn = fetch) {
    const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataRes = await res.json();

    if (!res.ok) {
      throw new Error(dataRes.error || "Connection Error");
    }

    const newToken = dataRes.token;
    if (!newToken) {
      throw new Error("Missing token is response");
    }

    token.set(newToken);
    document.cookie = `profileId=${dataRes.profile.id}; path=/; max-age=3600; secure; samesite=lax`;
    document.cookie = `token=${newToken}; path=/; max-age=3600; secure; samesite=lax`;
    return dataRes;
  }

  async register(data, fetchFn = fetch) {
    const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataRes = await res.json();

    if (!res.ok) {
      throw new Error(dataRes.error || "Connection Error");
    }

    return dataRes;
  }
}
