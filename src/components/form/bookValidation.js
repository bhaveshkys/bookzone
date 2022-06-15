import * as yup from "yup"
const bookSchema = yup.object().shape({
    title: yup.string().required(),
    author:yup.string().required(),
    cover_type:yup.string().required(),
    defects:yup.string().required(),
    genre:yup.string().required(),
    publication:yup.string().required(),
    totalparts_edition:yup.string().required(),
    additional_details:yup.string().required(),
    price:yup.string().required(),

})
export default bookSchema