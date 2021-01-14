import { Model, Document } from 'mongoose'

export interface IAccount {
  _id: string
  name: string
  amount: number
  currency: {
    _id: number
    name: string
    icon: string
  }
  iconID: number
  visible: boolean
}

export type AccountDocument = IAccount & Document

export type AccountModel = Model<AccountDocument>

export interface IAddNote {
  type: number
  amount: number
  accountId: string
  categoryId: string
  desc: string
  createAt: Date
}
