/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql'
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

export type IQuery = {
  accounts: Array<Maybe<IAccount>>
}

export type IQueryAccountsArgs = {
  visible?: Maybe<Scalars['Boolean']>
}

export type ICurrencyInput = {
  _id: Scalars['Int']
  name: Scalars['String']
  icon: Scalars['String']
}

export type IAccountInput = {
  name: Scalars['String']
  amount: Scalars['Int']
  iconID: Scalars['String']
  currency?: Maybe<ICurrencyInput>
  visible: Scalars['Boolean']
}

export type IMutation = {
  account: IAccount
}

export type IMutationAccountArgs = {
  acc: IAccountInput
}

export type IAccountsQueryVariables = Exact<{
  visible: Scalars['Boolean']
}>

export type IAccountsQuery = {
  accounts: Array<
    Maybe<
      Pick<IAccount, '_id' | 'name' | 'iconID' | 'amount' | 'visible'> & {
        currency: Pick<ICurrency, '_id' | 'icon'>
      }
    >
  >
}

export const AccountsDocument = gql`
  query accounts($visible: Boolean!) {
    accounts(visible: $visible) {
      _id
      name
      iconID
      amount
      visible
      currency {
        _id
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
  baseOptions: Apollo.QueryHookOptions<IAccountsQuery, IAccountsQueryVariables>,
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
  Currency: ResolverTypeWrapper<ICurrency>
  Int: ResolverTypeWrapper<Scalars['Int']>
  String: ResolverTypeWrapper<Scalars['String']>
  Account: ResolverTypeWrapper<IAccount>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Query: ResolverTypeWrapper<{}>
  CurrencyInput: ICurrencyInput
  AccountInput: IAccountInput
  Mutation: ResolverTypeWrapper<{}>
}>

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = ResolversObject<{
  Currency: ICurrency
  Int: Scalars['Int']
  String: Scalars['String']
  Account: IAccount
  ID: Scalars['ID']
  Boolean: Scalars['Boolean']
  Query: {}
  CurrencyInput: ICurrencyInput
  AccountInput: IAccountInput
  Mutation: {}
}>

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
}>

export type IMutationResolvers<
  ContextType = any,
  ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']
> = ResolversObject<{
  account?: Resolver<
    IResolversTypes['Account'],
    ParentType,
    ContextType,
    RequireFields<IMutationAccountArgs, 'acc'>
  >
}>

export type IResolvers<ContextType = any> = ResolversObject<{
  Currency?: ICurrencyResolvers<ContextType>
  Account?: IAccountResolvers<ContextType>
  Query?: IQueryResolvers<ContextType>
  Mutation?: IMutationResolvers<ContextType>
}>
