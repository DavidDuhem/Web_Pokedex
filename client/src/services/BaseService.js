const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:3000/api";

export default class BaseService {
  constructor(baseUrl = API_BASE_URL, endpoint) {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
  }

  async getAll() {
    console.log(`${this.baseUrl}/${this.endpoint}`);
    const res = await fetch(`${this.baseUrl}/${this.endpoint}`);
    if (!res.ok) throw new Error(`Error fetching ${this.endpoint}`);
    return res.json();
  }

  async getOne(id) {
    const res = await fetch(`${this.baseUrl}/${this.endpoint}/${id}`);
    if (!res.ok) throw new Error(`Error fetching ${this.endpoint}/${id}`);
    return res.json();
  }
}
