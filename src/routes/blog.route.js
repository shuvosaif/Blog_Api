import { Router } from 'express'
import validateMiddleware from '../middlewares/validate.middlewares.js'
import blogController from '../controllers/blog.controllers.js'
import blogUploadMiddleware from '../middlewares/blog.upload.middlewares.js'
import blogSchema from '../schemas/blog.schemas.js'


const route = Router()

route.post(
  '/',
  blogUploadMiddleware.upload.single('image'),
  validateMiddleware.validateRequest(blogSchema.create),
  blogController.create
)
route.put(
  '/:id',
  validateMiddleware.validateRequest(blogSchema.update),
  blogController.updateOne
)
route.get('/:id', blogController.getOne)
route.get('/', blogController.getAll)
route.delete('/:id', blogController.deleteOne)

export default route
