import commentService from '../services/comment.services.js'

const commentController = {}


commentController.create = async (req, res) => {
  try {
    let data = req.body
    // if (req.file.filename) {
    //   data.image = req.file.filename
    // }
    let result = await commentService.create(data)
    res.status(200).json({
      success: true,
      message: 'Comment Creation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Comment Creation Failed',
      data: error,
    })
  }
}

commentController.updateOne = async (req, res) => {
  try {
    let result = await commentService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Comment Data Updatation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Comment Data Updatation Failed',
      data: error,
    })
  }
}

commentController.getOne = async (req, res) => {
  try {
    let result = await commentService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Comment Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Comment Data Retrivation Failed',
      data: error,
    })
  }
}
commentController.getAll = async (req, res) => {
  try {
    let result = await commentService.getAll()
    res.status(200).json({
      success: true,
      message: 'Comment All Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Comment All Data Retrivation Failed',
      data: error,
    })
  }
}

commentController.deleteOne = async (req, res) => {
  try {
    let result = await commentService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Comment Data Deletion Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Comment Data Deletion Failed',
      data: error,
    })
  }
}

export default commentController
