import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    location: null,
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
    phone: Yup.string().required("Campo requerido"),
    email: Yup.string().email("Email inválido").required("Campo requerido"),
    description: Yup.string().required("Campo requerido"),
    location: Yup.object().required("La localización es requerida"),
  });
}
