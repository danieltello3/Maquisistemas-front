import { Button, CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import defaultPhoto from "/assets/defaultImage.jpeg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useClientRepository from "../../hooks/repositories/useClientRepository";
import { ClientForm } from "../../models/clients.model";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setDetalleClient, setEditClient, setModalClient } from "../../redux/slice/client.slice";
import { RootStateType } from "../../redux/store";
import { ClientModal } from "../../components/ui/organisms/ClientModal/ClientModal";

const ClientDetail = () => {
  const [client, setClient] = useState<ClientForm>();

  const clientRepository = useClientRepository();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { isModalClientOpen } = useSelector((store: RootStateType) => store.client);

  const { id } = useParams();

  const getClient = async () => {
    const client = await clientRepository.getById(id);
    setClient(client);
  };

  useEffect(() => {
    getClient();
  }, [id]);

  return (
    <Container>
      <Paper elevation={3} style={{ width: "100%", marginTop: 20 }}>
        <Grid container flexDirection="column" p={2}>
          <Typography variant="h3" component="h2" textAlign="center">
            Cliente
          </Typography>
          <Grid container flexDirection="row" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(setEditClient(true));
                dispatch(setDetalleClient(client));
                dispatch(setModalClient(!isModalClientOpen));
              }}>
              Editar
            </Button>
          </Grid>
          <Grid container flexDirection="row">
            <Grid
              item
              container
              flexDirection="column"
              alignContent="center"
              xs={12}
              md={4}
              gap={2}
              p={2}>
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
                <Typography
                  variant="body1"
                  color="GrayText"
                  fontWeight={600}
                  component="h5"
                  fontSize={24}>
                  Nombres:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.nombres}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  component="h5"
                  color="GrayText"
                  fontWeight={600}
                  fontSize={24}>
                  Apellidos:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.apellidos}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  component="h5"
                  color="GrayText"
                  fontWeight={600}
                  fontSize={24}>
                  Fecha de nacimiento:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.fechaNacimiento}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  component="h5"
                  color="GrayText"
                  fontWeight={600}
                  fontSize={24}>
                  Tipo de documento:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.tipoDocumento}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  component="h5"
                  color="GrayText"
                  fontWeight={600}
                  fontSize={24}>
                  Nro. de documento:
                </Typography>
                <Typography variant="body1" component="p" fontWeight={500} fontSize={24}>
                  {client?.nroDocumento}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <ClientModal />
    </Container>
  );
};

export default ClientDetail;
