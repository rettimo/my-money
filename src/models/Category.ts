import { Schema, model, models } from 'mongoose'
import { CategoryDocument, CategoryModel } from 'interfaces'

export const CategorySchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
})

export default models.Category ||
  model<CategoryDocument, CategoryModel>('Category', CategorySchema, 'categories')
