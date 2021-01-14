import { Schema, model, models } from 'mongoose'
import Account from './Account'

const TypeSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
})

const CategorySchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  typeID: {
    type: TypeSchema,
  },
})

const NoteSchema = new Schema({
  typeID: {
    type: TypeSchema,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  accountID: {
    type: Account,
    required: true,
  },
  categoryID: {
    type: CategorySchema,
    required: true,
  },
  desc: {
    type: String,
  },
})

export default models.Note || model('Note', NoteSchema, 'notes')
