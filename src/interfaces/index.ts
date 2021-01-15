import { Model, Document } from 'mongoose'

export interface ICategory {
  _id: string
  name: string
  icon: number
}

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

export type AccountModel = Model<IAccount & Document>

export type CategoryDocument = ICategory & Document

export type CategoryModel = Model<CategoryDocument>

export interface IAddNote {
  type: number
  amount: number
  accountId: string
  categoryId: string
  desc: string
  createAt: Date
}
