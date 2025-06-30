import BaseService from "./BaseService";

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

    const token = dataRes.token;

    document.cookie = `token=${token}; path=/; max-age=3600; secure; samesite=lax`;
    return res.json();
  }
}
