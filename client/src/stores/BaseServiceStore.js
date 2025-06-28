import { writable } from "svelte/store";

/*
 *  BASE SERVICE TO HELP FRONT LOAD API DATA
 */

export default class BaseServiceStore {
  constructor(service) {
    this.service = service;
    this.items = writable([]);
    this.loading = writable(false);
    this.error = writable(null);
  }

  async loadAll() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const data = await this.service.getAll();
      this.items.set(data);
    } catch (err) {
      this.error.set(err.message || "Erreur inconnue");
    } finally {
      this.loading.set(false);
    }
  }
}
