import { injectable } from "inversify";
import { ClientRepository } from "./client.repository";
import { ClientForm, ClientTable } from "../../../models/clients.model";
import { axiosInstance } from "../../../providers/Api";
import { ClientRows } from "../../../adapters/Client.adapters";

@injectable()
export class ClientRepositoryService implements ClientRepository{
  async getAll(): Promise<ClientTable[]> {
    try{
      const response = await axiosInstance.get('/api/Clients');
      return ClientRows(response.data);
    }catch(err){
      console.error(err)
    }
  }
  async getById(id: string): Promise<ClientForm> {
    try{
      const response = await axiosInstance.get(`/api/Clients/${id}`);
      return response.data;
    }catch(err){
      console.error(err)
      return null;
    }
  }
  async create(client: ClientForm): Promise<string> {
    try{
      const response = await axiosInstance.post('/api/Clients', client);
      return response.data;
    }catch(err){
      console.error(err)
      return null;
    }
  }
  async update(client: ClientForm): Promise<boolean> {
    try{
      const response = await axiosInstance.put('/api/Clients', client);
      return response.data;
    }catch(err){
      console.error(err)
      return null;
    }
  }
  async delete(id: string): Promise<boolean> {
    try{
      const response = await axiosInstance.delete(`/api/Clients/${id}`);
      return response.status === 200;
    }catch(err){
      console.error(err)
      return false;
    }
  }
}