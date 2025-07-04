const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:3000/api";

import { token } from "../stores/auth.js";
import { get } from "svelte/store";
import { errorHandler } from "$lib/../utils/errorHandler";

export default class BaseService {
  constructor(baseUrl = API_BASE_URL, endpoint) {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }

  // fetchFn is from sveltekit, it makes it work server AND client side

  async getAll(page = "", search = "", fetchFn = fetch) {
    return await errorHandler(async () => {
      const url = new URL(`${this.baseUrl}/${this.endpoint}`);

      if (page !== "") {
        url.searchParams.append("page", page);
      }

      if (search) {
        url.searchParams.append("search", search);
      }

      // If user connected, we want to append token to know is has voted

      const currentToken = get(token);

      const headers = new Headers();

      if (currentToken) {
        headers.append("Authorization", `Bearer ${currentToken}`);
      }

      const res = await fetchFn(url.toString(), {
        headers: headers,
      });
      if (!res.ok) throw new Error(`Error fetching ${url}`);
      return res.json();
    }, "Fetch failed");
  }

  async getOne(id, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}`);
      if (!res.ok) throw new Error(`Error fetching ${this.endpoint}/${id}`);
      return res.json();
    }, "Fetch failed");
  }

  async create(data, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(`${this.baseUrl}/${this.endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${get(token)}`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error while creating");
      }
      return res.json();
    }, "Fetch failed");
  }

  async delete(id, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${get(token)}`,
        },
      });
      if (!res.ok) {
        let errorMessage = `Error deleting ${this.endpoint}/${id}`;
        try {
          const data = await res.json();
          if (data.error) errorMessage = data.error;
        } catch {}
        throw new Error(errorMessage);
      }

      return true;
    }, "Fetch failed");
  }

  async update(id, data, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${get(token)}`,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error while updating");
      }

      return res.json();
    }, "Fetch failed");
  }
}
