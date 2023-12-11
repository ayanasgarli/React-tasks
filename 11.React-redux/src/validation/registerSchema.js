import * as Yup from "yup"
Yup.setLocale({
    mixed: {
      required: 'Required',
    },
  });


export const registerSchema=Yup.object().shape({
    name:Yup.string().min(5,"must be at least 5 characters").required(),
    password:Yup.string().min(8,"must be at least 8 characters").required()
})