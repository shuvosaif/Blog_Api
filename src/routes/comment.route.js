import { Router } from 'express'
import commentController from '../controllers/comment.controllers.js'
import commentSchema from '../schemas/comment.schemas.js'
import ValidateMiddleware from '../middlewares/validate.middlewares.js'

const route = Router()

route.post(
  '/',
  ValidateMiddleware.validateRequest(commentSchema.create),
  commentController.create
)
route.put(
  '/:id',
  ValidateMiddleware.validateRequest(commentSchema.update),
  commentController.updateOne
)
route.get('/:id', commentController.getOne)
route.get('/', commentController.getAll)
route.delete('/:id', commentController.deleteOne)

export default route
