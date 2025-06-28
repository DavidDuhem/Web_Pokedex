const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:3000/api";

export default class BaseService {
  constructor(baseUrl = API_BASE_URL, endpoint) {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }

  // fetchFn is from sveltekit, it makes it work server AND client side

  async getAll(fetchFn = fetch) {
    console.log(`${this.baseUrl}/${this.endpoint}`);
    const res = await fetchFn(`${this.baseUrl}/${this.endpoint}`);
    if (!res.ok) throw new Error(`Error fetching ${this.endpoint}`);
    return res.json();
  }

  async getOne(id, fetchFn = fetch) {
    const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}`);
    if (!res.ok) throw new Error(`Error fetching ${this.endpoint}/${id}`);
    return res.json();
  }

  async create(data, fetchFn = fetch) {
    const res = await fetchFn(`${this.baseUrl}/${this.endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Erreur lors de la création");
    }
    return res.json();
  }

  async delete(id, fetchFn = fetch) {
    const res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}`, {
      method: "DELETE",
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
  }
}
