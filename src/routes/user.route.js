import { Router } from 'express'
import userController from '../controllers/user.controllers.js'
import userSchema from '../schemas/user.schemas.js'
import validateMiddleware from '../middlewares/validate.middlewares.js'

const { validateRequest } = validateMiddleware
const route = Router()

route.put('/:id', validateRequest(userSchema.update), userController.updateOne)
route.get('/:id', userController.getOne)
route.get('/', userController.getAll)
route.delete('/:id', userController.deleteOne)

export default route
