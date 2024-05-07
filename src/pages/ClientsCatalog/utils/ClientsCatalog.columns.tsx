import { Button, Grid, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ClientTable } from "../../../models/clients.model";

export const clientCatalogColumns = (
  navigate: (id: string) => void,
  editClient: (row: ClientTable) => void,
  deleteClient: (id: string) => void
): GridColDef<ClientTable>[] => {
  return [
    { field: "nombres", headerName: "Nombres", minWidth: 130, flex: 1},
    { field: "apellidos", headerName: "Last name", minWidth: 130, flex: 1},
    { field: "fechaNacimiento", headerName: "Fecha de nacimiento", minWidth: 130, flex: 1},
    { field: "tipoDocumento", headerName: "Tipo de Documento", minWidth: 120, flex: 1},
    { field: "nroDocumento", headerName: "Nro. de Documento", minWidth: 130, flex: 1},
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      width: 180,
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
