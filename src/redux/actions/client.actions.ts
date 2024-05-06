import { PayloadAction } from "@reduxjs/toolkit";
import { ClientModel } from "../models/client.model";
import { ClientForm } from "../../models/clients.model";

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