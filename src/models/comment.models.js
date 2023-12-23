import mongoose from 'mongoose'

const commentSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
    image: { type: String, required: true },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'Users_Collection',
      required: true,
    },
    blog: {
      type: mongoose.Types.ObjectId,
      ref: 'Blogs_Collection',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const commentModel = mongoose.model('Comments_Collection', commentSchema)

export default commentModel
