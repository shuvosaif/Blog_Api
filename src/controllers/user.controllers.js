import userService from '../services/user.services.js'

const userController = {}

userController.updateOne = async (req, res) => {
  try {
    console.log(req.body, req.params.id)
    let result = await userService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Successfully Updated Data',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Failed To Updated Data',
      data: error,
    })
  }
}
userController.getOne = async (req, res) => {
  try {
    let result = await userService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Successfully Retrieved Single Data',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Failed To Retrieved Single Data',
      data: error,
    })
  }
}
userController.getAll = async (req, res) => {
  try {
    let result = await userService.getAll()
    console.log(result)
    res.status(200).json({
      success: true,
      message: 'Successfully Retrieved All Data',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Failed To Retrieved All Data',
      data: error,
    })
  }
}
userController.deleteOne = async (req, res) => {
  try {
    let result = await userService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Successfully Deleted Data',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Failed To Delete Data',
      data: error,
    })
  }
}

export default userController
