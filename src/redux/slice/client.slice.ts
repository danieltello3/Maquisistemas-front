import { createSlice } from "@reduxjs/toolkit";
import { ClientModel } from "../models/client.model";
import {
  setDetalleCliente,
  setEditClientState,
  setModalCVState,
  setModalClientState,
} from "../actions/client.actions";

const INITIAL_STATE: ClientModel = {
  isModalClientOpen: false,
  isModalCVOpen: false,
  isEditClient: false,
  detalleCliente: null,
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
});

export const {
  setModalClientState: setModalClient,
  setModalCVState: setModalCV,
  setEditClientState: setEditClient,
  setDetalleCliente: setDetalleClient,
} = clientSlice.actions;
