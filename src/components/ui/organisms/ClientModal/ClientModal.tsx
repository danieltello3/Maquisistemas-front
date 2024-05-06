import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  CardMedia,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
} from "@mui/material";
import LabeledInput from "../../moleculs/LabeledInput/LabeledInput";
import LabeledSelect from "../../moleculs/LabeledSelect/LabeledSelect";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../../redux/store";
import { setModalCV, setModalClient } from "../../../../redux/slice/client.slice";
import { modalStyle } from "../../../../utilities/modal.util";
import { PdfViewerModal } from "../PdfViewerModal/PdfViewerModal";
import { useForm } from "react-hook-form";
import { ClientForm, clientFormDefaultValues } from "../../../../models/clients.model";

export const ClientModal = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedImage, setSelectedImage] = useState<File>();

  const imageRef = useRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>();

  const dispatch = useDispatch();
  const { isModalClientOpen, isModalCVOpen, isEditClient, detalleCliente } = useSelector(
    (store: RootStateType) => store.client
  );

  const titulo = isEditClient ? "Editar Cliente" : "Agregar Cliente";

  const form = useForm<ClientForm>({
    defaultValues: clientFormDefaultValues,
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const { ref: refImg, ...restImg } = register("imagen", { required: "La imagen es requerida" });
  const { ref: refCV, ...restCV } = register("hojaVida", {
    required: "La hoja de vida es requerida",
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, type: "file" | "image") => {
    const file = event.target.files?.[0];
    if (file) {
      type === "file" ? setSelectedFile(file) : setSelectedImage(file);
    }
  };

  const handleFileClick = (type: "file" | "image") => {
    if (type === "file" && inputRef.current) {
      console.log(type, inputRef.current);
      inputRef.current.click();
    }
    if (type === "image" && imageRef.current) {
      console.log(type, imageRef.current);
      imageRef.current.click();
    }
  };

  const onSubmit = (data: ClientForm) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(detalleCliente);
    detalleCliente ? form.reset(detalleCliente) : form.reset(clientFormDefaultValues);
  }, [detalleCliente]);

  return (
    <div>
      <Modal
        open={isModalClientOpen}
        onClose={() => dispatch(setModalClient(!isModalClientOpen))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h5" component="h2" p={2}>
            {titulo}
          </Typography>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid display="flex" flexDirection="column" p={2} gap={2}>
              <Grid item gap={2} display="flex" width="100%" xs={12}>
                <LabeledInput
                  BaseTextFieldProps={{
                    id: "nombres",
                    label: "Nombres",
                    ...register("nombres", { required: "El nombre es requerido" }),
                    error: !!errors.nombres,
                    helperText: errors.nombres?.message,
                  }}
                  required
                />
                <LabeledInput
                  BaseTextFieldProps={{
                    id: "apellidos",
                    label: "Apellidos",
                    ...register("apellidos", { required: "Los apellidos son requeridos" }),
                    error: !!errors.apellidos,
                    helperText: errors.apellidos?.message,
                  }}
                  required
                />
              </Grid>
              <Grid item gap={2} display="flex" width="100%">
                <LabeledInput
                  BaseTextFieldProps={{
                    id: "fechaNacimiento",
                    label: "Fecha de Nacimiento",
                    type: "date",
                    ...register("fechaNacimiento", {
                      required: "La fecha de nacimiento es requerida",
                    }),
                    error: !!errors.fechaNacimiento,
                    helperText: errors.fechaNacimiento?.message,
                  }}
                  required
                />
              </Grid>
              <Grid item gap={2} display="flex" width="100%">
                <LabeledSelect
                  selectProps={{
                    id: "tipoDocumento",
                    label: "Tipo de Documento",
                    variant: "outlined",
                    ...register("tipoDocumento", { required: "El tipo de documento es requerido" }),
                    error: !!errors.tipoDocumento,
                    disabled: isEditClient,
                  }}
                  required
                  options={[
                    { value: 1, label: "DNI" },
                    { value: 2, label: "RUC" },
                    { value: 3, label: "CARNET DE EXTRANJERÍA" },
                  ]}
                />
                <LabeledInput
                  BaseTextFieldProps={{
                    id: "nroDocumento",
                    label: "Nro. de Documento",
                    ...register("nroDocumento", {
                      required: "El número de documento es requerido",
                    }),
                    error: !!errors.nroDocumento,
                    helperText: errors.nroDocumento?.message,
                    disabled: isEditClient,
                  }}
                  required
                />
              </Grid>
              <Grid item gap={2} display="flex" width="100%">
                <Grid item container direction="column" width="100%">
                  <InputLabel htmlFor="foto" required>
                    Foto del cliente
                  </InputLabel>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 10,
                    }}>
                    <CardMedia
                      component="img"
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : `assets/defaultImage.jpeg`
                      }
                      alt="foto del cliente generico"
                      onClick={() => handleFileClick("image")}
                      sx={{ maxWidth: 220 }}
                    />
                    <input
                      type="file"
                      style={{ display: "none" }}
                      accept="image/jpeg"
                      {...restImg}
                      name="imagen"
                      ref={(e) => {
                        refImg(e);
                        imageRef.current = e;
                      }}
                      onChange={(e) => handleFileChange(e, "image")}
                    />
                    <FormHelperText error={!!errors.imagen}>
                      {errors.imagen?.message}
                    </FormHelperText>
                    <Button variant="text" color="primary" onClick={() => handleFileClick("image")}>
                      Subir Foto
                    </Button>
                  </div>
                </Grid>
                <Grid item container direction="column" width="100%">
                  <InputLabel htmlFor="hojaVida" required>
                    Hoja de vida
                  </InputLabel>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 10,
                    }}>
                    {selectedFile && (
                      <Grid item container direction="row" alignItems="center" width="100%">
                        <Typography variant="body2" color="CaptionText">
                          {selectedFile?.name}
                        </Typography>
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => dispatch(setModalCV(!isModalCVOpen))}>
                          <DescriptionIcon />
                        </IconButton>
                      </Grid>
                    )}
                    <input
                      type="file"
                      style={{ display: "none" }}
                      accept=".pdf"
                      {...restCV}
                      name="hojaVida"
                      ref={(e) => {
                        refCV(e);
                        inputRef.current = e;
                      }}
                      onChange={(e) => handleFileChange(e, "file")}
                    />
                    <FormHelperText error={!!errors.hojaVida}>
                      {errors.hojaVida?.message}
                    </FormHelperText>
                    <Button variant="text" color="primary" onClick={() => handleFileClick("file")}>
                      Subir Hoja de vida
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Divider />
              <Grid item gap={2} display="flex" justifyContent="flex-end" width="100%">
                <Button variant="contained" color="primary" type="submit">
                  Agregar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
      <PdfViewerModal file={selectedFile} />
    </div>
  );
};
