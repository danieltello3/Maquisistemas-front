import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ClientModel } from "../models/client.model";
import {
  setClientsCatalog,
  setDetalleCliente,
  setEditClientState,
  setModalCVState,
  setModalClientState,
} from "../actions/client.actions";
import { ClientTable } from "../../models/clients.model";

const INITIAL_STATE: ClientModel = {
  isModalClientOpen: false,
  isModalCVOpen: false,
  isEditClient: false,
  detalleCliente: null,
  catalog: [],
};

export const clientSlice = createSlice({
  name: "client",
  initialState: INITIAL_STATE,
  reducers: {
    setModalClientState,
    setModalCVState,
    setEditClientState,
    setDetalleCliente,
  },
  extraReducers: (builder)=> {
    builder.addCase(setClientsCatalog.fulfilled, (state, action: PayloadAction<ClientTable[]>)=> {
      if(action.payload){
        state.catalog = action.payload;
      }
    })
  }
});

export const {
  setModalClientState: setModalClient,
  setModalCVState: setModalCV,
  setEditClientState: setEditClient,
  setDetalleCliente: setDetalleClient,
} = clientSlice.actions;
