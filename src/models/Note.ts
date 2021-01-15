import { Schema, model, models } from 'mongoose'
import { AccountSchema } from './Account'
import { CategorySchema } from './Category'

const NoteSchema = new Schema({
  type: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  account: {
    type: AccountSchema,
    required: true,
  },
  category: {
    type: CategorySchema,
    required: true,
  },
  desc: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

export default models.Note || model('Note', NoteSchema, 'notes')
