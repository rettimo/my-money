/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Account from 'models/Account'
import { dbConnect } from 'utils/dbConnect'
import { IResolvers } from 'generated/graphql'

export const resolvers: IResolvers = {
  Query: {
    accounts: async (_: unknown, { visible }) => {
      await dbConnect()
      const acc = await Account.find({ visible })
      return acc
    },
  },
}
