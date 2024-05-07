import { ComboResponse, ComboSelect } from "../models/combo.model";

export const ComboAdapter = (combo: ComboResponse[]): ComboSelect[] => {
  return combo.map((item) => ({
    value: item.id,
    label: item.nombre,
  }));
}