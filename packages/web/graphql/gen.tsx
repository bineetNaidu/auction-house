import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Auction = {
  __typename?: 'Auction';
  auctionOwner: User;
  createdAt: Scalars['DateTime'];
  expirationDate: Scalars['DateTime'];
  hasExpired: Scalars['Boolean'];
  id: Scalars['Float'];
  itemImage: Scalars['String'];
  itemName: Scalars['String'];
  startPrice: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAuctionInput = {
  auctionOwnerId: Scalars['Float'];
  expirationDate: Scalars['DateTime'];
  itemImage: Scalars['String'];
  itemName: Scalars['String'];
  startPrice: Scalars['Float'];
};

export type CreateOrFindUserInput = {
  avatar: Scalars['String'];
  googleId: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuction: Auction;
  createOrFindUser: User;
  deleteAuction: Scalars['Boolean'];
};


export type MutationCreateAuctionArgs = {
  input: CreateAuctionInput;
};


export type MutationCreateOrFindUserArgs = {
  input: CreateOrFindUserInput;
};


export type MutationDeleteAuctionArgs = {
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getAuction?: Maybe<Auction>;
  getAuctionsList: Array<Auction>;
  hello: Scalars['String'];
  info: Scalars['String'];
};


export type QueryGetAuctionArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  googleId: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuctionFragmentFragment = { __typename?: 'Auction', id: number, itemImage: string, itemName: string, startPrice: number, expirationDate: any, hasExpired: boolean, createdAt: any, updatedAt: any };

export type UserFragmentFragment = { __typename?: 'User', id: number, name: string, avatar: string, googleId: string, createdAt: any, updatedAt: any };

export type CreateAuctionMutationVariables = Exact<{
  input: CreateAuctionInput;
}>;


export type CreateAuctionMutation = { __typename?: 'Mutation', createAuction: { __typename?: 'Auction', id: number, itemImage: string, itemName: string, startPrice: number, expirationDate: any, hasExpired: boolean, createdAt: any, updatedAt: any, auctionOwner: { __typename?: 'User', googleId: string, id: number } } };

export type DeleteAuctionMutationVariables = Exact<{
  deleteAuctionId: Scalars['Float'];
}>;


export type DeleteAuctionMutation = { __typename?: 'Mutation', deleteAuction: boolean };

export type GetAuctionQueryVariables = Exact<{
  getAuctionId: Scalars['Float'];
}>;


export type GetAuctionQuery = { __typename?: 'Query', getAuction?: { __typename?: 'Auction', id: number, itemImage: string, itemName: string, startPrice: number, expirationDate: any, hasExpired: boolean, createdAt: any, updatedAt: any, auctionOwner: { __typename?: 'User', id: number, name: string, avatar: string } } | null };

export type GetAuctionsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuctionsListQuery = { __typename?: 'Query', getAuctionsList: Array<{ __typename?: 'Auction', id: number, itemImage: string, itemName: string, startPrice: number, expirationDate: any, hasExpired: boolean, createdAt: any, updatedAt: any, auctionOwner: { __typename?: 'User', id: number, name: string, avatar: string } }> };

export const AuctionFragmentFragmentDoc = gql`
    fragment AuctionFragment on Auction {
  id
  itemImage
  itemName
  startPrice
  expirationDate
  hasExpired
  createdAt
  updatedAt
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  avatar
  googleId
  createdAt
  updatedAt
}
    `;
export const CreateAuctionDocument = gql`
    mutation CreateAuction($input: CreateAuctionInput!) {
  createAuction(input: $input) {
    ...AuctionFragment
    auctionOwner {
      googleId
      id
    }
  }
}
    ${AuctionFragmentFragmentDoc}`;
export type CreateAuctionMutationFn = Apollo.MutationFunction<CreateAuctionMutation, CreateAuctionMutationVariables>;

/**
 * __useCreateAuctionMutation__
 *
 * To run a mutation, you first call `useCreateAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuctionMutation, { data, loading, error }] = useCreateAuctionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuctionMutation, CreateAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuctionMutation, CreateAuctionMutationVariables>(CreateAuctionDocument, options);
      }
export type CreateAuctionMutationHookResult = ReturnType<typeof useCreateAuctionMutation>;
export type CreateAuctionMutationResult = Apollo.MutationResult<CreateAuctionMutation>;
export type CreateAuctionMutationOptions = Apollo.BaseMutationOptions<CreateAuctionMutation, CreateAuctionMutationVariables>;
export const DeleteAuctionDocument = gql`
    mutation DeleteAuction($deleteAuctionId: Float!) {
  deleteAuction(id: $deleteAuctionId)
}
    `;
export type DeleteAuctionMutationFn = Apollo.MutationFunction<DeleteAuctionMutation, DeleteAuctionMutationVariables>;

/**
 * __useDeleteAuctionMutation__
 *
 * To run a mutation, you first call `useDeleteAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuctionMutation, { data, loading, error }] = useDeleteAuctionMutation({
 *   variables: {
 *      deleteAuctionId: // value for 'deleteAuctionId'
 *   },
 * });
 */
export function useDeleteAuctionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAuctionMutation, DeleteAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAuctionMutation, DeleteAuctionMutationVariables>(DeleteAuctionDocument, options);
      }
export type DeleteAuctionMutationHookResult = ReturnType<typeof useDeleteAuctionMutation>;
export type DeleteAuctionMutationResult = Apollo.MutationResult<DeleteAuctionMutation>;
export type DeleteAuctionMutationOptions = Apollo.BaseMutationOptions<DeleteAuctionMutation, DeleteAuctionMutationVariables>;
export const GetAuctionDocument = gql`
    query GetAuction($getAuctionId: Float!) {
  getAuction(id: $getAuctionId) {
    ...AuctionFragment
    auctionOwner {
      id
      name
      avatar
    }
  }
}
    ${AuctionFragmentFragmentDoc}`;

/**
 * __useGetAuctionQuery__
 *
 * To run a query within a React component, call `useGetAuctionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuctionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuctionQuery({
 *   variables: {
 *      getAuctionId: // value for 'getAuctionId'
 *   },
 * });
 */
export function useGetAuctionQuery(baseOptions: Apollo.QueryHookOptions<GetAuctionQuery, GetAuctionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuctionQuery, GetAuctionQueryVariables>(GetAuctionDocument, options);
      }
export function useGetAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuctionQuery, GetAuctionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuctionQuery, GetAuctionQueryVariables>(GetAuctionDocument, options);
        }
export type GetAuctionQueryHookResult = ReturnType<typeof useGetAuctionQuery>;
export type GetAuctionLazyQueryHookResult = ReturnType<typeof useGetAuctionLazyQuery>;
export type GetAuctionQueryResult = Apollo.QueryResult<GetAuctionQuery, GetAuctionQueryVariables>;
export const GetAuctionsListDocument = gql`
    query GetAuctionsList {
  getAuctionsList {
    ...AuctionFragment
    auctionOwner {
      id
      name
      avatar
    }
  }
}
    ${AuctionFragmentFragmentDoc}`;

/**
 * __useGetAuctionsListQuery__
 *
 * To run a query within a React component, call `useGetAuctionsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuctionsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuctionsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuctionsListQuery(baseOptions?: Apollo.QueryHookOptions<GetAuctionsListQuery, GetAuctionsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuctionsListQuery, GetAuctionsListQueryVariables>(GetAuctionsListDocument, options);
      }
export function useGetAuctionsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuctionsListQuery, GetAuctionsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuctionsListQuery, GetAuctionsListQueryVariables>(GetAuctionsListDocument, options);
        }
export type GetAuctionsListQueryHookResult = ReturnType<typeof useGetAuctionsListQuery>;
export type GetAuctionsListLazyQueryHookResult = ReturnType<typeof useGetAuctionsListLazyQuery>;
export type GetAuctionsListQueryResult = Apollo.QueryResult<GetAuctionsListQuery, GetAuctionsListQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    