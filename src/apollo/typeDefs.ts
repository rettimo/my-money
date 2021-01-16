import { gql } from '@apollo/client'

export const typeDefs = gql`
  #custom types

  scalar Date

  #types

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

  type Category {
    _id: Int!
    name: String!
    type: Int!
  }

  type Note {
    _id: ID!
    type: Int!
    amount: Int!
    account: Account!
    category: Category!
    desc: String
    createAt: Date!
  }

  #inputs

  input AccountInput {
    _id: ID!
    name: String!
    amount: Int!
    currency: CurrencyInput!
    iconID: Int!
    visible: Boolean!
  }

  input CategoryInput {
    _id: Int!
    name: String!
    type: Int!
  }

  input CurrencyInput {
    _id: Int!
    name: String!
    icon: String!
  }

  input NoteInput {
    type: Int!
    amount: Int!
    account: AccountInput!
    category: CategoryInput!
    desc: String
    createAt: Date!
  }

  #query and mutation

  type Query {
    accounts(visible: Boolean): [Account]!
    categories(type: Int!): [Category]!
    notes(date: Date!): [Note]!
  }

  type Mutation {
    note(input: NoteInput!): Note!
    accountAmount(_id: String!, amount: Int!, type: Int!): Account!
  }
`
