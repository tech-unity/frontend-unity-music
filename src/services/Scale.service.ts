import { api } from "../core/api";

export async function getScales() {
  return api.get('/scales');
}