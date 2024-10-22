import * as yup from "yup";

export const formValidation = yup.object({
    title: yup.string().required().min(5).max(10),
    description: yup.string().required().min(5).max(10),
    assignTo: yup.string().required(),
    priority: yup.string().required(),
  }).required();