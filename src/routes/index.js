import express from 'express'
import AuthRoutes from './auth.route.js'
import UserRoutes from './user.route.js'
import blogRoutes from './blog.route.js'
import categoryRoutes from './category.route.js'
import commentsRoutes from './comment.route.js'

import authMiddleware from '../middlewares/auth.middlewares.js'

const routes = express.Router()

routes.use('/health', (req, res) =>
  res.status(200).json({ status: 'Server Health Found ok' })
)

routes.use('/api/v1/auth', AuthRoutes)
routes.use('/api/v1/users', authMiddleware.authenticate, UserRoutes)
routes.use('/api/v1/blogs', authMiddleware.authenticate, blogRoutes)
routes.use('/api/v1/categories', authMiddleware.authenticate, categoryRoutes)
routes.use('/api/v1/comments', authMiddleware.authenticate, commentsRoutes)

export default routes
