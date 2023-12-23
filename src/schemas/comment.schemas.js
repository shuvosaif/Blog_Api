import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const commentSchema = {}

commentSchema.create = object().shape({
  content: string().required('Content is Required!'),
})
commentSchema.update = object().shape({
  content: string().optional('Content is Required!'),
})
export default commentSchema
