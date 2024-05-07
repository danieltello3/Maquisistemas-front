import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { clientCatalogColumns } from "./utils/ClientsCatalog.columns";
import { ClientTable } from "../../models/clients.model";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "../../components/ui/moleculs/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { ClientModal } from "../../components/ui/organisms/ClientModal/ClientModal";
import { useDispatch, useSelector } from "react-redux";
import { setDetalleClient, setEditClient, setModalClient } from "../../redux/slice/client.slice";
import { RootStateType } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { ClientRowtoForm } from "../../adapters/Client.adapters";
import useClientRepository from "../../hooks/repositories/useClientRepository";
import { setClientsCatalog } from "../../redux/actions/client.actions";
import { ThunkDispatch } from "@reduxjs/toolkit";

const ClientsCatalog = () => {
  const [filter, setFilter] = useState<string>("");
  const [dataFiltrada, setDataFiltrada] = useState<ClientTable[]>([]);


  const clientRepository = useClientRepository();
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any,any,any>>();
  const { isModalClientOpen, catalog } = useSelector((store: RootStateType) => store.client);

  const buscarEnLista = (lista: ClientTable[], valorBuscado: string) => {
    return lista.filter((item) =>
      Object.values(item).some(
        (val) => typeof val === "string" && val.toLowerCase().includes(valorBuscado.toLowerCase())
      )
    );
  };

  const handleDetalle = (id: string) => {
    navigate(`/clients/${id}`);
  };

  const handleEdit = (row: ClientTable) => {
    dispatch(setEditClient(true));
    dispatch(setDetalleClient(ClientRowtoForm(row)));
    dispatch(setModalClient(!isModalClientOpen));
  };

  const handleDelete = async (id: string) => {
    const response = await clientRepository.delete(id);
    console.log(response)
    if(response){
      dispatch(setClientsCatalog());
    }
  }

  useEffect(() => {
    if(filter !== ""){
      const dataFiltrada = buscarEnLista(catalog, filter);
      setDataFiltrada(dataFiltrada);
    }
  }, [filter,catalog]);

  useEffect(()=> {
    setDataFiltrada(catalog);
  },[catalog])

  useEffect(()=>{
    dispatch(setClientsCatalog())
  },[])

  return (
    <Container>
      <Paper elevation={3} style={{ width: "100%" }}>
        <Grid container rowSpacing={2} flexDirection="column" padding={5} margin={2}>
          <Grid item alignSelf="center">
            <Typography variant="h4" component="h2">
              Catalogo de clientes
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-between">
            <SearchBar filter={filter} setFilter={setFilter} />
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => {
                dispatch(setEditClient(false));
                dispatch(setDetalleClient(null));
                dispatch(setModalClient(!isModalClientOpen));
              }}>
              Agregar Cliente
            </Button>
          </Grid>
          <Grid item xs>
            <DataGrid
              rows={dataFiltrada}
              columns={clientCatalogColumns(handleDetalle, handleEdit, handleDelete)}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
              rowSelection={false}
            />
          </Grid>
        </Grid>
      </Paper>
      <ClientModal />
    </Container>
  );
};

export default ClientsCatalog;
