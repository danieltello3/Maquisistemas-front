import { Button, Grid, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ClientTable } from "../../../models/clients.model";

export const clientCatalogColumns = (
  navigate: (id: number) => void,
  editClient: (row: ClientTable) => void,
  deleteClient: (id: number) => void
): GridColDef<ClientTable>[] => {
  return [
    { field: "nombres", headerName: "Nombres", width: 130 },
    { field: "apellidos", headerName: "Last name", width: 130 },
    { field: "fechaNacimiento", headerName: "Fecha de nacimiento", width: 130 },
    { field: "tipoDocumentoDescripcion", headerName: "Tipo de Documento", width: 100 },
    { field: "numeroDocumento", headerName: "Nro. de Documento", width: 130 },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <Grid container spacing={1}>
          <Grid item>
            <IconButton aria-label="view" size="small" onClick={() => navigate(params.row.id)}>
              <VisibilityIcon fontSize="small" />
            </IconButton>{" "}
          </Grid>
          <Grid item>
            <IconButton aria-label="edit" size="small" onClick={() => editClient(params.row)}>
              <EditIcon fontSize="small" />
            </IconButton>{" "}
          </Grid>
          <Grid item>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => deleteClient(params.row.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
  ];
};
