import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { clientCatalogColumns } from "./utils/ClientsCatalog.columns";
import { ClientForm, ClientTable } from "../../models/clients.model";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "../../components/ui/moleculs/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { ClientModal } from "../../components/ui/organisms/ClientModal/ClientModal";
import { useDispatch, useSelector } from "react-redux";
import { setDetalleClient, setEditClient, setModalClient } from "../../redux/slice/client.slice";
import { RootStateType } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { ClientRowtoForm } from "../../adapters/Client.adapters";

const rows: ClientTable[] = [
  {
    id: 1,
    apellidos: "Snow",
    nombres: "Jon",
    fechaNacimiento: "12/02/2000",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 2,
    apellidos: "Lannister",
    nombres: "Cersei",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 3,
    apellidos: "Lannister",
    nombres: "Jaime",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 4,
    apellidos: "Stark",
    nombres: "Arya",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 5,
    apellidos: "Targaryen",
    nombres: "Daenerys",
    fechaNacimiento: "15/03/1996",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 6,
    apellidos: "Melisandre",
    nombres: "Jose",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 7,
    apellidos: "Clifford",
    nombres: "Ferrara",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 8,
    apellidos: "Frances",
    nombres: "Rossini",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
  {
    id: 9,
    apellidos: "Roxie",
    nombres: "Harvey",
    fechaNacimiento: "12/02/2001",
    tipoDocumento: 1,
    tipoDocumentoDescripcion: "DNI",
    numeroDocumento: "12345678",
  },
];
const ClientsCatalog = () => {
  const [filter, setFilter] = useState<string>("");
  const [data, setData] = useState<ClientTable[]>(rows);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isModalClientOpen } = useSelector((store: RootStateType) => store.client);

  const buscarEnLista = (lista: ClientTable[], valorBuscado: string) => {
    return lista.filter((item) =>
      Object.values(item).some(
        (val) => typeof val === "string" && val.toLowerCase().includes(valorBuscado.toLowerCase())
      )
    );
  };

  const handleDetalle = (id: number) => {
    navigate(`/clients/${id}`);
  };

  const handleEdit = (row: ClientTable) => {
    dispatch(setEditClient(true));
    dispatch(setDetalleClient(ClientRowtoForm(row)));
    dispatch(setModalClient(!isModalClientOpen));
  };

  useEffect(() => {
    console.log(filter);
    const dataFiltrada = buscarEnLista(rows, filter);
    setData(dataFiltrada);
  }, [filter]);

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
              rows={data}
              columns={clientCatalogColumns(handleDetalle, handleEdit, () => {})}
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
