export interface ClientTable {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  tipoDocumento: number;
  tipoDocumentoDescripcion: string;
  numeroDocumento: string;
}

export interface ClientForm {
  id?: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  tipoDocumento: number;
  nroDocumento: string;
  imagen?: File;
  hojaVida?: File;
}

export const clientFormDefaultValues: ClientForm = {
  nombres: "",
  apellidos: "",
  fechaNacimiento: "",
  tipoDocumento: 1,
  nroDocumento: "",
  imagen: null,
  hojaVida: null,
}