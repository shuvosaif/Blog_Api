import blogModel from '../models/blog.models.js'

const blogServices = {}

blogServices.create = async (payload) => {
  try {
    let result = await blogModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
blogServices.updateOne = async (id, payload) => {
  try {
    let result = await blogModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
blogServices.getOne = async (id) => {
  try {
    let result = await blogModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
blogServices.getAll = async () => {
  try {
    let result = await blogModel.find()
    return result
  } catch (error) {
    throw error
  }
}
blogServices.deleteOne = async (id) => {
  try {
    let result = await blogModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default blogServices
