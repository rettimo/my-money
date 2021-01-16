/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Date custom scalar type */
  Date: any
}

export type ICurrency = {
  _id: Scalars['Int']
  name: Scalars['String']
  icon: Scalars['String']
}

export type IAccount = {
  _id: Scalars['ID']
  name: Scalars['String']
  amount: Scalars['Int']
  currency: ICurrency
  iconID: Scalars['Int']
  visible: Scalars['Boolean']
}

export type ICategory = {
  _id: Scalars['Int']
  name: Scalars['String']
  type: Scalars['Int']
}

export type INote = {
  _id: Scalars['ID']
  type: Scalars['Int']
  amount: Scalars['Int']
  account: IAccount
  category: ICategory
  desc?: Maybe<Scalars['String']>
  createAt: Scalars['Date']
}

export type IAccountInput = {
  _id: Scalars['ID']
  name: Scalars['String']
  amount: Scalars['Int']
  currency: ICurrencyInput
  iconID: Scalars['Int']
  visible: Scalars['Boolean']
}

export type ICategoryInput = {
  _id: Scalars['Int']
  name: Scalars['String']
  type: Scalars['Int']
}

export type ICurrencyInput = {
  _id: Scalars['Int']
  name: Scalars['String']
  icon: Scalars['String']
}

export type INoteInput = {
  type: Scalars['Int']
  amount: Scalars['Int']
  account: IAccountInput
  category: ICategoryInput
  desc?: Maybe<Scalars['String']>
  createAt: Scalars['Date']
}

export type IQuery = {
  accounts: Array<Maybe<IAccount>>
  categories: Array<Maybe<ICategory>>
  notes: Array<Maybe<INote>>
}

export type IQueryAccountsArgs = {
  visible?: Maybe<Scalars['Boolean']>
}

export type IQueryCategoriesArgs = {
  type: Scalars['Int']
}

export type IQueryNotesArgs = {
  date: Scalars['Date']
}

export type IMutation = {
  note: INote
  accountAmount: IAccount
}

export type IMutationNoteArgs = {
  input: INoteInput
}

export type IMutationAccountAmountArgs = {
  _id: Scalars['String']
  amount: Scalars['Int']
  type: Scalars['Int']
}

export type IAccountAcountMutationVariables = Exact<{
  id: Scalars['String']
  amount: Scalars['Int']
  type: Scalars['Int']
}>

export type IAccountAcountMutation = { accountAmount: Pick<IAccount, 'name' | 'amount'> }

export type INoteMutationVariables = Exact<{
  input: INoteInput
}>

export type INoteMutation = { note: Pick<INote, 'type' | 'amount'> }

export type IAccountsQueryVariables = Exact<{
  visible?: Maybe<Scalars['Boolean']>
}>

export type IAccountsQuery = {
  accounts: Array<
    Maybe<
      Pick<IAccount, '_id' | 'name' | 'iconID' | 'amount' | 'visible'> & {
        currency: Pick<ICurrency, '_id' | 'name' | 'icon'>
      }
    >
  >
}

export type ICategoriesQueryVariables = Exact<{
  type: Scalars['Int']
}>

export type ICategoriesQuery = {
  categories: Array<Maybe<Pick<ICategory, '_id' | 'name' | 'type'>>>
}

export type INotesQueryVariables = Exact<{
  date: Scalars['Date']
}>

export type INotesQuery = {
  notes: Array<
    Maybe<
      Pick<INote, '_id' | 'type' | 'amount' | 'createAt' | 'desc'> & {
        account: Pick<IAccount, 'name'> & { currency: Pick<ICurrency, 'icon'> }
        category: Pick<ICategory, 'name' | '_id'>
      }
    >
  >
}

export const AccountAcountDocument = gql`
  mutation accountAcount($id: String!, $amount: Int!, $type: Int!) {
    accountAmount(_id: $id, amount: $amount, type: $type) {
      name
      amount
    }
  }
`
export type IAccountAcountMutationFn = Apollo.MutationFunction<
  IAccountAcountMutation,
  IAccountAcountMutationVariables
>

/**
 * __useAccountAcountMutation__
 *
 * To run a mutation, you first call `useAccountAcountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountAcountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountAcountMutation, { data, loading, error }] = useAccountAcountMutation({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAccountAcountMutation(
  baseOptions?: Apollo.MutationHookOptions<IAccountAcountMutation, IAccountAcountMutationVariables>,
) {
  return Apollo.useMutation<IAccountAcountMutation, IAccountAcountMutationVariables>(
    AccountAcountDocument,
    baseOptions,
  )
}
export type AccountAcountMutationHookResult = ReturnType<typeof useAccountAcountMutation>
export type AccountAcountMutationResult = Apollo.MutationResult<IAccountAcountMutation>
export type AccountAcountMutationOptions = Apollo.BaseMutationOptions<
  IAccountAcountMutation,
  IAccountAcountMutationVariables
>
export const NoteDocument = gql`
  mutation note($input: NoteInput!) {
    note(input: $input) {
      type
      amount
    }
  }
`
export type INoteMutationFn = Apollo.MutationFunction<INoteMutation, INoteMutationVariables>

/**
 * __useNoteMutation__
 *
 * To run a mutation, you first call `useNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [noteMutation, { data, loading, error }] = useNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNoteMutation(
  baseOptions?: Apollo.MutationHookOptions<INoteMutation, INoteMutationVariables>,
) {
  return Apollo.useMutation<INoteMutation, INoteMutationVariables>(NoteDocument, baseOptions)
}
export type NoteMutationHookResult = ReturnType<typeof useNoteMutation>
export type NoteMutationResult = Apollo.MutationResult<INoteMutation>
export type NoteMutationOptions = Apollo.BaseMutationOptions<INoteMutation, INoteMutationVariables>
export const AccountsDocument = gql`
  query accounts($visible: Boolean) {
    accounts(visible: $visible) {
      _id
      name
      iconID
      amount
      visible
      currency {
        _id
        name
        icon
      }
    }
  }
`

/**
 * __useAccountsQuery__
 *
 * To run a query within a React component, call `useAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsQuery({
 *   variables: {
 *      visible: // value for 'visible'
 *   },
 * });
 */
export function useAccountsQuery(
  baseOptions?: Apollo.QueryHookOptions<IAccountsQuery, IAccountsQueryVariables>,
) {
  return Apollo.useQuery<IAccountsQuery, IAccountsQueryVariables>(AccountsDocument, baseOptions)
}
export function useAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IAccountsQuery, IAccountsQueryVariables>,
) {
  return Apollo.useLazyQuery<IAccountsQuery, IAccountsQueryVariables>(AccountsDocument, baseOptions)
}
export type AccountsQueryHookResult = ReturnType<typeof useAccountsQuery>
export type AccountsLazyQueryHookResult = ReturnType<typeof useAccountsLazyQuery>
export type AccountsQueryResult = Apollo.QueryResult<IAccountsQuery, IAccountsQueryVariables>
export const CategoriesDocument = gql`
  query categories($type: Int!) {
    categories(type: $type) {
      _id
      name
      type
    }
  }
`

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<ICategoriesQuery, ICategoriesQueryVariables>,
) {
  return Apollo.useQuery<ICategoriesQuery, ICategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions,
  )
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ICategoriesQuery, ICategoriesQueryVariables>,
) {
  return Apollo.useLazyQuery<ICategoriesQuery, ICategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions,
  )
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>
export type CategoriesQueryResult = Apollo.QueryResult<ICategoriesQuery, ICategoriesQueryVariables>
export const NotesDocument = gql`
  query notes($date: Date!) {
    notes(date: $date) {
      _id
      type
      amount
      createAt
      account {
        name
        currency {
          icon
        }
      }
      category {
        name
        _id
      }
      desc
    }
  }
`

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useNotesQuery(
  baseOptions: Apollo.QueryHookOptions<INotesQuery, INotesQueryVariables>,
) {
  return Apollo.useQuery<INotesQuery, INotesQueryVariables>(NotesDocument, baseOptions)
}
export function useNotesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<INotesQuery, INotesQueryVariables>,
) {
  return Apollo.useLazyQuery<INotesQuery, INotesQueryVariables>(NotesDocument, baseOptions)
}
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>
export type NotesQueryResult = Apollo.QueryResult<INotesQuery, INotesQueryVariables>
export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = ResolversObject<{
  Date: ResolverTypeWrapper<Scalars['Date']>
  Currency: ResolverTypeWrapper<ICurrency>
  Int: ResolverTypeWrapper<Scalars['Int']>
  String: ResolverTypeWrapper<Scalars['String']>
  Account: ResolverTypeWrapper<IAccount>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Category: ResolverTypeWrapper<ICategory>
  Note: ResolverTypeWrapper<INote>
  AccountInput: IAccountInput
  CategoryInput: ICategoryInput
  CurrencyInput: ICurrencyInput
  NoteInput: INoteInput
  Query: ResolverTypeWrapper<{}>
  Mutation: ResolverTypeWrapper<{}>
}>

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = ResolversObject<{
  Date: Scalars['Date']
  Currency: ICurrency
  Int: Scalars['Int']
  String: Scalars['String']
  Account: IAccount
  ID: Scalars['ID']
  Boolean: Scalars['Boolean']
  Category: ICategory
  Note: INote
  AccountInput: IAccountInput
  CategoryInput: ICategoryInput
  CurrencyInput: ICurrencyInput
  NoteInput: INoteInput
  Query: {}
  Mutation: {}
}>

export interface IDateScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date'
}

export type ICurrencyResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Currency'] = IResolversParentTypes['Currency']
> = ResolversObject<{
  _id?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>
  icon?: Resolver<IResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type IAccountResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Account'] = IResolversParentTypes['Account']
> = ResolversObject<{
  _id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  currency?: Resolver<IResolversTypes['Currency'], ParentType, ContextType>
  iconID?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  visible?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ICategoryResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Category'] = IResolversParentTypes['Category']
> = ResolversObject<{
  _id?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type INoteResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Note'] = IResolversParentTypes['Note']
> = ResolversObject<{
  _id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>
  type?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>
  account?: Resolver<IResolversTypes['Account'], ParentType, ContextType>
  category?: Resolver<IResolversTypes['Category'], ParentType, ContextType>
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>
  createAt?: Resolver<IResolversTypes['Date'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type IQueryResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']
> = ResolversObject<{
  accounts?: Resolver<
    Array<Maybe<IResolversTypes['Account']>>,
    ParentType,
    ContextType,
    RequireFields<IQueryAccountsArgs, never>
  >
  categories?: Resolver<
    Array<Maybe<IResolversTypes['Category']>>,
    ParentType,
    ContextType,
    RequireFields<IQueryCategoriesArgs, 'type'>
  >
  notes?: Resolver<
    Array<Maybe<IResolversTypes['Note']>>,
    ParentType,
    ContextType,
    RequireFields<IQueryNotesArgs, 'date'>
  >
}>

export type IMutationResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']
> = ResolversObject<{
  note?: Resolver<
    IResolversTypes['Note'],
    ParentType,
    ContextType,
    RequireFields<IMutationNoteArgs, 'input'>
  >
  accountAmount?: Resolver<
    IResolversTypes['Account'],
    ParentType,
    ContextType,
    RequireFields<IMutationAccountAmountArgs, '_id' | 'amount' | 'type'>
  >
}>

export type IResolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType
  Currency?: ICurrencyResolvers<ContextType>
  Account?: IAccountResolvers<ContextType>
  Category?: ICategoryResolvers<ContextType>
  Note?: INoteResolvers<ContextType>
  Query?: IQueryResolvers<ContextType>
  Mutation?: IMutationResolvers<ContextType>
}>
