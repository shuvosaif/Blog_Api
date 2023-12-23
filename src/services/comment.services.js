import commentModel from '../models/comment.models.js'

const commentServices = {}

commentServices.create = async (payload) => {
  try {
    let result = await commentModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
commentServices.updateOne = async (id, payload) => {
  try {
    let result = await commentModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
commentServices.getOne = async (id) => {
  try {
    let result = await commentModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
commentServices.getAll = async () => {
  try {
    let result = await commentModel.find()
    return result
  } catch (error) {
    throw error
  }
}
commentServices.deleteOne = async (id) => {
  try {
    let result = await commentModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default commentServices
