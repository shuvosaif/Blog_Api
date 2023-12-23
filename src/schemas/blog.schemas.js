import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const blogSchema = {}

blogSchema.create = object().shape({
  title: string().required('title  is Required!'),
  content: string().optional('Content is Required!'),
  image: string().optional(' Images is Required!'),
  commentsCount: string().optional(' Images is Required!'),
})
blogSchema.update = object().shape({
    title: string().required('title  is Required!'),
    content: string().optional('Content is Required!'),
    image: string().optional(' Images is Required!'),
    commentsCount: string().optional(' Images is Required!'),
})
export default blogSchema
