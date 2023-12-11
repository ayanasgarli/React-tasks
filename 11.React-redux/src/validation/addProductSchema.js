import * as Yup from "yup"
Yup.setLocale({
    mixed: {
      required: 'Required',
    },
  });


export const addProductSchema=Yup.object().shape({
    name:Yup.string().min(5,"must be at least 5 characters").required(),
    price:Yup.number().min(1).required()
})