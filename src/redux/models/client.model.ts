import { ClientForm, ClientTable } from "../../models/clients.model";

export interface ClientModel {
  isModalClientOpen: boolean;
  isModalCVOpen: boolean;
  isEditClient: boolean;
  detalleCliente: ClientForm | null;
  catalog: ClientTable[];
}