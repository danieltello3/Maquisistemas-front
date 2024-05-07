import { ComboSelect } from "../../../models/combo.model";

export interface ComboRepository {
  getDocumentTypes(): Promise<ComboSelect[]>;
}