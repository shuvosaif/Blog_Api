import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const categorySchema = {}

categorySchema.create = object().shape({
  category: string().required('Category Count is Required!'),
  description: string().optional('Tags is Required!'),
  image: string().optional(' Images is Required!'),
})
categorySchema.update = object().shape({
  category: string().optional('Category Count is Required!'),
  description: string().optional('Tags is Required!'),
  image: string().optional(' Images is Required!'),
})
export default categorySchema
