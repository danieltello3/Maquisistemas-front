export interface ClientTable {
  id: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  idTipoDocumento: number;
  tipoDocumento: string;
  nroDocumento: string;
}

export interface ClientForm {
  id?: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  idTipoDocumento?: number;
  tipoDocumento?: string;
  nroDocumento?: string;
  imagen?: File;
  hojaVida?: File;
}

export const clientFormDefaultValues: ClientForm = {
  nombres: "",
  apellidos: "",
  fechaNacimiento: "",
  idTipoDocumento: 1,
  nroDocumento: "",
  imagen: null,
  hojaVida: null,
}