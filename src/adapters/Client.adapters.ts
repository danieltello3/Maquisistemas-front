import { ClientForm, ClientTable } from "../models/clients.model"
import { formatDate } from "../utilities/date.util"

export const ClientRowtoForm = (client: ClientTable): ClientForm => {
  return {
    id: client.id,
    nombres: client.nombres,
    apellidos: client.apellidos,
    fechaNacimiento: formatDate(client.fechaNacimiento),
    tipoDocumento: client.tipoDocumento,
    nroDocumento: client.numeroDocumento
  }
}