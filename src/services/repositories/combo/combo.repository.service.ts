import { injectable } from "inversify";
import { ComboRepository } from "./combo.repository";
import { ComboSelect } from "../../../models/combo.model";
import { axiosInstance } from "../../../providers/Api";
import { ComboAdapter } from "../../../adapters/Combo.adapter";

@injectable()
export class ComboRepositoryService implements ComboRepository{
  async getDocumentTypes(): Promise<ComboSelect[]> {
    try{
      const response = await axiosInstance.get('/api/Combos/GetTipoDocumentos');
      return ComboAdapter(response.data);
    }catch(err){
      console.error(err)
    }
  }
}