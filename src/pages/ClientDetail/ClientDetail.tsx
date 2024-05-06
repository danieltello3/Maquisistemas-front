import { Button, CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import defaultPhoto from "/assets/defaultImage.jpeg";
import { useState } from "react";

const cliente = {
  id: 1,
  apellidos: "Snow",
  nombres: "Jon",
  fechaNacimiento: "12/02/2000",
  tipoDocumento: "DNI",
  numeroDocumento: "12345678",
};

const ClientDetail = () => {
  const [client, setClient] = useState(cliente);

  return (
    <Container>
      <Paper elevation={3} style={{ width: "100%", marginTop: 20 }}>
        <Grid container flexDirection="column" p={2}>
          <Typography variant="h3" component="h2" textAlign="center">
            Cliente
          </Typography>
          <Grid container flexDirection="row" justifyContent="flex-end">
            <Button variant="contained" color="primary">Editar</Button>
          </Grid>
          <Grid container flexDirection="row" >
            <Grid item container flexDirection="column" alignContent="center" xs={12} md={4} gap={2} p={2}>
              <CardMedia
                style={{ borderRadius: 8 }}
                component="img"
                src={defaultPhoto}
                alt="foto del cliente generico"
              />
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                startIcon={<DescriptionIcon />}>
                Hoja de vida
              </Button>
            </Grid>
            <Grid item container flexDirection="column" xs={12} md={8} gap={1} p={2}>
              <Grid item>
                <Typography variant="body1" color="GrayText" fontWeight={600} component="h5" fontSize={24}>
                  Nombres:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.nombres}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h5" color="GrayText" fontWeight={600} fontSize={24}>
                  Apellidos:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.apellidos}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h5" color="GrayText" fontWeight={600} fontSize={24}>
                  Fecha de nacimiento:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.fechaNacimiento}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h5" color="GrayText" fontWeight={600} fontSize={24}>
                  Tipo de documento:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.tipoDocumento}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h5" color="GrayText" fontWeight={600} fontSize={24}>
                  Nro. de documento:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.numeroDocumento}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ClientDetail;
