import categoryModel from '../models/category.models.js'

const categoryServices = {}

categoryServices.create = async (payload) => {
  try {
    let result = await categoryModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
categoryServices.updateOne = async (id, payload) => {
  try {
    let result = await categoryModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
categoryServices.getOne = async (id) => {
  try {
    let result = await categoryModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
categoryServices.getAll = async () => {
  try {
    let result = await categoryModel.find()
    return result
  } catch (error) {
    throw error
  }
}
categoryServices.deleteOne = async (id) => {
  try {
    let result = await categoryModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default categoryServices
