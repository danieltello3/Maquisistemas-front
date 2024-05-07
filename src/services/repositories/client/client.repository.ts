import { ClientForm, ClientTable } from "../../../models/clients.model";

export interface ClientRepository {
  getAll(): Promise<ClientTable[]>;
  getById(id: string): Promise<ClientForm>;
  create(client: ClientForm): Promise<string>;
  update(client: ClientForm): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}