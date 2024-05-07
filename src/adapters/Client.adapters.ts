import { ClientForm, ClientTable } from "../models/clients.model"
import { formatDate } from "../utilities/date.util"

export const ClientRowtoForm = (client: ClientTable): ClientForm => {
  return {
    id: client.id,
    nombres: client.nombres,
    apellidos: client.apellidos,
    fechaNacimiento: formatDate(client.fechaNacimiento),
    idTipoDocumento: client.idTipoDocumento,
    tipoDocumento: client.tipoDocumento,
    nroDocumento: client.nroDocumento
  }
}

export const ClientRows = (clients: ClientTable[]): ClientTable[] => {
  return clients.map(client => {
    return {
      ...client,
      fechaNacimiento: formatDate(client.fechaNacimiento,"-","/")
    }
  })
}