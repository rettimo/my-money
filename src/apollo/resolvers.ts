/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Account from 'models/Account'
import { dbConnect } from 'utils/dbConnect'
import { IResolvers } from 'generated/graphql'
import Category from 'models/Category'
import { GraphQLScalarType, Kind } from 'graphql'
import Note from 'models/Note'
import mongoose from 'mongoose'

export const resolvers: IResolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value)
    },
    serialize(value) {
      return value.getTime()
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10)
      }
      return null
    },
  }),
  Query: {
    accounts: async (_: unknown, { visible = null }) => {
      await dbConnect()

      if (visible === null) {
        const acc = await Account.find({})
        return acc
      }

      const acc = await Account.find({ visible })
      return acc
    },
    categories: async (_: unknown, { type }) => {
      await dbConnect()

      const catgs = await Category.find({ type })

      return catgs
    },
  },
  Mutation: {
    note: async (_: unknown, { input }) => {
      await dbConnect()

      const note = Note.create(input)

      return note
    },
    accountAmount: async (_: unknown, { _id, amount, type }) => {
      await dbConnect()

      if (type === 0) {
        await Account.findByIdAndUpdate({ _id }, { $inc: { amount: -amount } })
        const acc = Account.findById({ _id })
        return acc
      }

      await Account.findByIdAndUpdate({ _id }, { $inc: { amount } })
      const acc = Account.findById({ _id })
      return acc
    },
  },
}
