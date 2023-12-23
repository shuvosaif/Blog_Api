import blogService from '../services/blog.services.js'

const blogController = {}


blogController.create = async (req, res) => {
  try {
    let data = req.body
    if (req.file.filename) {
      data.image = req.file.filename
    }
    let result = await blogService.create(data)
    res.status(200).json({
      success: true,
      message: 'Blog Creation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Blog Creation Failed',
      data: error,
    })
  }
}

blogController.updateOne = async (req, res) => {
  try {
    let result = await blogService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Blog Data Updatation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Blog Data Updatation Failed',
      data: error,
    })
  }
}

blogController.getOne = async (req, res) => {
  try {
    let result = await blogService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Blog Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Blog Data Retrivation Failed',
      data: error,
    })
  }
}
blogController.getAll = async (req, res) => {
  try {
    let result = await blogService.getAll()
    res.status(200).json({
      success: true,
      message: 'Blog All Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Blog All Data Retrivation Failed',
      data: error,
    })
  }
}

blogController.deleteOne = async (req, res) => {
  try {
    let result = await blogService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Blog Data Deletion Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Blog Data Deletion Failed',
      data: error,
    })
  }
}

export default blogController
