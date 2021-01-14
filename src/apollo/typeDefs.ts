import { gql } from '@apollo/client'

export const typeDefs = gql`
  type Currency {
    _id: Int!
    name: String!
    icon: String!
  }

  type Account {
    _id: ID!
    name: String!
    amount: Int!
    currency: Currency!
    iconID: Int!
    visible: Boolean!
  }

  type Query {
    accounts(visible: Boolean): [Account]!
  }

  input CurrencyInput {
    _id: Int!
    name: String!
    icon: String!
  }

  input AccountInput {
    name: String!
    amount: Int!
    iconID: String!
    currency: CurrencyInput
    visible: Boolean!
  }

  type Mutation {
    account(acc: AccountInput): Account!
  }
`
