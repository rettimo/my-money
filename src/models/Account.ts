import { Schema, model, models } from 'mongoose'
import { AccountModel, AccountDocument } from 'interfaces'

const CurrencyIDSchema = new Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
})

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: CurrencyIDSchema,
    required: true,
  },
  iconID: {
    type: Number,
    required: true,
  },
  visible: {
    type: Boolean,
  },
})

export default models.Account ||
  model<AccountDocument, AccountModel>('Account', AccountSchema, 'accounts')
