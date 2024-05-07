import Swal, { SweetAlertResult } from "sweetalert2";
 const useAlert = () => {
  const warningAlert = async (message: string): Promise<SweetAlertResult<any>> => {
    return await Swal.fire({
      title: "Atención",
      text: message,
      icon: "warning",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    });
  };

  const successAlert = (message: string) => {
    Swal.fire({
      title: "Éxito",
      text: message,
      icon: "success",
    });
  }

  return { warningAlert, successAlert };
}

export default useAlert;