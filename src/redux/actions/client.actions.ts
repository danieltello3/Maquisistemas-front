import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ClientModel } from "../models/client.model";
import { ClientForm } from "../../models/clients.model";
import { repositoryContainer } from "../../services/config/inversify.conf";
import { TYPES } from "../../services/config/types";
import { ClientRepository } from "../../services/repositories/client/client.repository";

export const setModalClientState = (state: ClientModel,{payload}: PayloadAction<boolean>): ClientModel => {
  return ({
    ...state,
    isModalClientOpen: payload
  })
}
export const setModalCVState = (state: ClientModel,{payload}: PayloadAction<boolean>): ClientModel => {
  return ({
    ...state,
    isModalCVOpen: payload
  })
}

export const setEditClientState = (state: ClientModel,{payload}: PayloadAction<boolean>): ClientModel => {
  return ({
    ...state,
    isEditClient: payload
  })
}

export const setDetalleCliente = (state: ClientModel,{payload}: PayloadAction<ClientForm>): ClientModel => {
  return ({
    ...state,
    detalleCliente: payload
  })
}

export const setClientsCatalog = createAsyncThunk('client/setClientsCatalog', async () => {
  const repository = repositoryContainer.get(TYPES.CLIENT_REPOSITORY) as ClientRepository
  return (await repository.getAll())
})