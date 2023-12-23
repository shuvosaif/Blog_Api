import { Router } from 'express'
import categoryController from '../controllers/category.controllers.js'
import categoryUploadMiddleware from '../middlewares/category.upload.middleware.js'
import categorySchema from '../schemas/category.schemas.js'
import ValidateMiddleware from '../middlewares/validate.middlewares.js'

const route = Router()

route.post(
  '/',
  categoryUploadMiddleware.upload.single('image'),
  ValidateMiddleware.validateRequest(categorySchema.create),
  categoryController.create
)
route.put(
  '/:id',
  ValidateMiddleware.validateRequest(categorySchema.update),
  categoryController.updateOne
)
route.get('/:id', categoryController.getOne)
route.get('/', categoryController.getAll)
route.delete('/:id', categoryController.deleteOne)

export default route
