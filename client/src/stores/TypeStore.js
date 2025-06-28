import BaseServiceStore from "./BaseServiceStore.js";
import TypeService from "../services/TypeService.js";

const service = new TypeService();

class TypeStore extends BaseServiceStore {
  constructor() {
    super(service);
  }
}

export const typeStore = new TypeStore();
export const types = typeStore.items;
export const typeLoading = typeStore.loading;
export const typeError = typeStore.error;
export const loadTypes = () => typeStore.loadAll();
