import createHttpError from 'http-errors'

const validateMiddleware = {}

validateMiddleware.validateRequest = (schema) => async (req, res, next) => {
  try {
    //console.log(req.body)
    if (Object.entries(req.body).length)
      await schema.validate(req.body, { abortEarly: false })

    next()
  } catch (error) {
    console.log(error)
    next(createHttpError(422, error))
  }
}

export default validateMiddleware
