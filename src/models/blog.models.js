import mongoose from 'mongoose'

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    commentsCount: { type: Number, required: true },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Categories_Collection',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const blogModel = mongoose.model('Blogs_Collection', blogSchema)

export default blogModel
