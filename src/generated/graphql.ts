import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DetailEffect = {
  __typename?: 'DetailEffect';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type DetailEnchantData = {
  __typename?: 'DetailEnchantData';
  effect: Array<Maybe<DetailEffect>>;
  id: Scalars['String']['output'];
  impName: Scalars['String']['output'];
  isImp: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  position: Scalars['String']['output'];
  positionName: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  route: Array<Maybe<Scalars['String']['output']>>;
  target: Scalars['String']['output'];
};

export type DetailListEnchantData = {
  __typename?: 'DetailListEnchantData';
  effect: Array<Maybe<DetailEffect>>;
  id: Scalars['String']['output'];
  invalidTargetName: Scalars['String']['output'];
  isInvalidTarget: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  position: Scalars['String']['output'];
  positionName: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  rankSeq: Scalars['Int']['output'];
  route: Array<Maybe<Scalars['String']['output']>>;
  target: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type Details = {
  __typename?: 'Details';
  effectName: Scalars['String']['output'];
  enchants: Array<DetailListEnchantData>;
};

export type Effect = {
  __typename?: 'Effect';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Form = {
  __typename?: 'Form';
  effects: Array<Effect>;
  positions: Array<Position>;
  ranks: Array<Rank>;
  targets: Array<Target>;
};

export type Position = {
  __typename?: 'Position';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  detail: DetailEnchantData;
  details: Details;
  form?: Maybe<Form>;
  rank?: Maybe<RankDetail>;
  search: Array<SearchEnchantData>;
};


export type QueryDetailArgs = {
  id: Scalars['String']['input'];
};


export type QueryDetailsArgs = {
  effect: Scalars['String']['input'];
  effectVal: Scalars['String']['input'];
  enchantName: Scalars['String']['input'];
  position: Scalars['String']['input'];
  rangeVal: Scalars['String']['input'];
  rank: Scalars['String']['input'];
  rankRange: Scalars['String']['input'];
  target: Scalars['String']['input'];
};


export type QueryRankArgs = {
  rank: Scalars['String']['input'];
};


export type QuerySearchArgs = {
  keyword: Scalars['String']['input'];
};

export type Rank = {
  __typename?: 'Rank';
  rank: Scalars['String']['output'];
};

export type RankDetail = {
  __typename?: 'RankDetail';
  ancientRate: Scalars['String']['output'];
  ancientRateThu: Scalars['String']['output'];
  elfRate: Scalars['String']['output'];
  elfRateThu: Scalars['String']['output'];
  eliteRate: Scalars['String']['output'];
  eliteRateThu: Scalars['String']['output'];
  normalRate: Scalars['String']['output'];
  normalRateThu: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  rareHolyRate: Scalars['String']['output'];
  rareHolyRateThu: Scalars['String']['output'];
};

export type SearchEffect = {
  __typename?: 'SearchEffect';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type SearchEnchantData = {
  __typename?: 'SearchEnchantData';
  effect: Array<Maybe<SearchEffect>>;
  id: Scalars['String']['output'];
  impName: Scalars['String']['output'];
  isImp: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  position: Scalars['String']['output'];
  positionName: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  rankSeq: Scalars['Int']['output'];
  route: Array<Maybe<Scalars['String']['output']>>;
  target: Scalars['String']['output'];
};

export type Target = {
  __typename?: 'Target';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetFormQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormQuery = { __typename?: 'Query', form?: { __typename?: 'Form', effects: Array<{ __typename?: 'Effect', id: string, name: string }>, ranks: Array<{ __typename?: 'Rank', rank: string }>, positions: Array<{ __typename?: 'Position', id: string, name: string }>, targets: Array<{ __typename?: 'Target', id: string, name: string }> } | null };

export type GetEnchantDetailQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetEnchantDetailQuery = { __typename?: 'Query', detail: { __typename?: 'DetailEnchantData', id: string, name: string, nameEn: string, isImp: boolean, impName: string, position: string, positionName: string, rank: string, route: Array<string | null>, target: string, effect: Array<{ __typename?: 'DetailEffect', name: string, type: string } | null> } };

export type GetEnchantDetailsQueryVariables = Exact<{
  enchantName: Scalars['String']['input'];
  effect: Scalars['String']['input'];
  effectVal: Scalars['String']['input'];
  rangeVal: Scalars['String']['input'];
  position: Scalars['String']['input'];
  rank: Scalars['String']['input'];
  rankRange: Scalars['String']['input'];
  target: Scalars['String']['input'];
}>;


export type GetEnchantDetailsQuery = { __typename?: 'Query', details: { __typename?: 'Details', effectName: string, enchants: Array<{ __typename?: 'DetailListEnchantData', id: string, name: string, nameEn: string, isInvalidTarget: boolean, invalidTargetName: string, position: string, positionName: string, rank: string, rankSeq: number, route: Array<string | null>, target: string, value: number, effect: Array<{ __typename?: 'DetailEffect', name: string, type: string } | null> }> } };

export type GetRankQueryVariables = Exact<{
  rank: Scalars['String']['input'];
}>;


export type GetRankQuery = { __typename?: 'Query', rank?: { __typename?: 'RankDetail', rank: string, normalRate: string, eliteRate: string, elfRate: string, ancientRate: string, rareHolyRate: string, normalRateThu: string, eliteRateThu: string, elfRateThu: string, ancientRateThu: string, rareHolyRateThu: string } | null };

export type SearchEnchantQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
}>;


export type SearchEnchantQuery = { __typename?: 'Query', search: Array<{ __typename?: 'SearchEnchantData', id: string, name: string, nameEn: string, isImp: boolean, impName: string, position: string, positionName: string, rank: string, rankSeq: number, route: Array<string | null>, target: string, effect: Array<{ __typename?: 'SearchEffect', name: string, type: string } | null> }> };


export const GetFormDocument = gql`
    query GetForm {
  form {
    effects {
      id
      name
    }
    ranks {
      rank
    }
    positions {
      id
      name
    }
    targets {
      id
      name
    }
  }
}
    `;

/**
 * __useGetFormQuery__
 *
 * To run a query within a React component, call `useGetFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFormQuery(baseOptions?: Apollo.QueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
      }
export function useGetFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export function useGetFormSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export type GetFormQueryHookResult = ReturnType<typeof useGetFormQuery>;
export type GetFormLazyQueryHookResult = ReturnType<typeof useGetFormLazyQuery>;
export type GetFormSuspenseQueryHookResult = ReturnType<typeof useGetFormSuspenseQuery>;
export type GetFormQueryResult = Apollo.QueryResult<GetFormQuery, GetFormQueryVariables>;
export const GetEnchantDetailDocument = gql`
    query GetEnchantDetail($id: String!) {
  detail(id: $id) {
    id
    name
    nameEn
    isImp
    impName
    effect {
      name
      type
    }
    position
    positionName
    rank
    route
    target
  }
}
    `;

/**
 * __useGetEnchantDetailQuery__
 *
 * To run a query within a React component, call `useGetEnchantDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnchantDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnchantDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEnchantDetailQuery(baseOptions: Apollo.QueryHookOptions<GetEnchantDetailQuery, GetEnchantDetailQueryVariables> & ({ variables: GetEnchantDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnchantDetailQuery, GetEnchantDetailQueryVariables>(GetEnchantDetailDocument, options);
      }
export function useGetEnchantDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnchantDetailQuery, GetEnchantDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnchantDetailQuery, GetEnchantDetailQueryVariables>(GetEnchantDetailDocument, options);
        }
export function useGetEnchantDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEnchantDetailQuery, GetEnchantDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEnchantDetailQuery, GetEnchantDetailQueryVariables>(GetEnchantDetailDocument, options);
        }
export type GetEnchantDetailQueryHookResult = ReturnType<typeof useGetEnchantDetailQuery>;
export type GetEnchantDetailLazyQueryHookResult = ReturnType<typeof useGetEnchantDetailLazyQuery>;
export type GetEnchantDetailSuspenseQueryHookResult = ReturnType<typeof useGetEnchantDetailSuspenseQuery>;
export type GetEnchantDetailQueryResult = Apollo.QueryResult<GetEnchantDetailQuery, GetEnchantDetailQueryVariables>;
export const GetEnchantDetailsDocument = gql`
    query GetEnchantDetails($enchantName: String!, $effect: String!, $effectVal: String!, $rangeVal: String!, $position: String!, $rank: String!, $rankRange: String!, $target: String!) {
  details(
    enchantName: $enchantName
    effect: $effect
    effectVal: $effectVal
    rangeVal: $rangeVal
    position: $position
    rank: $rank
    rankRange: $rankRange
    target: $target
  ) {
    enchants {
      id
      name
      nameEn
      isInvalidTarget
      invalidTargetName
      effect {
        name
        type
      }
      position
      positionName
      rank
      rankSeq
      route
      target
      value
    }
    effectName
  }
}
    `;

/**
 * __useGetEnchantDetailsQuery__
 *
 * To run a query within a React component, call `useGetEnchantDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnchantDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnchantDetailsQuery({
 *   variables: {
 *      enchantName: // value for 'enchantName'
 *      effect: // value for 'effect'
 *      effectVal: // value for 'effectVal'
 *      rangeVal: // value for 'rangeVal'
 *      position: // value for 'position'
 *      rank: // value for 'rank'
 *      rankRange: // value for 'rankRange'
 *      target: // value for 'target'
 *   },
 * });
 */
export function useGetEnchantDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables> & ({ variables: GetEnchantDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables>(GetEnchantDetailsDocument, options);
      }
export function useGetEnchantDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables>(GetEnchantDetailsDocument, options);
        }
export function useGetEnchantDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables>(GetEnchantDetailsDocument, options);
        }
export type GetEnchantDetailsQueryHookResult = ReturnType<typeof useGetEnchantDetailsQuery>;
export type GetEnchantDetailsLazyQueryHookResult = ReturnType<typeof useGetEnchantDetailsLazyQuery>;
export type GetEnchantDetailsSuspenseQueryHookResult = ReturnType<typeof useGetEnchantDetailsSuspenseQuery>;
export type GetEnchantDetailsQueryResult = Apollo.QueryResult<GetEnchantDetailsQuery, GetEnchantDetailsQueryVariables>;
export const GetRankDocument = gql`
    query GetRank($rank: String!) {
  rank(rank: $rank) {
    rank
    normalRate
    eliteRate
    elfRate
    ancientRate
    rareHolyRate
    normalRateThu
    eliteRateThu
    elfRateThu
    ancientRateThu
    rareHolyRateThu
  }
}
    `;

/**
 * __useGetRankQuery__
 *
 * To run a query within a React component, call `useGetRankQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRankQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRankQuery({
 *   variables: {
 *      rank: // value for 'rank'
 *   },
 * });
 */
export function useGetRankQuery(baseOptions: Apollo.QueryHookOptions<GetRankQuery, GetRankQueryVariables> & ({ variables: GetRankQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRankQuery, GetRankQueryVariables>(GetRankDocument, options);
      }
export function useGetRankLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRankQuery, GetRankQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRankQuery, GetRankQueryVariables>(GetRankDocument, options);
        }
export function useGetRankSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRankQuery, GetRankQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRankQuery, GetRankQueryVariables>(GetRankDocument, options);
        }
export type GetRankQueryHookResult = ReturnType<typeof useGetRankQuery>;
export type GetRankLazyQueryHookResult = ReturnType<typeof useGetRankLazyQuery>;
export type GetRankSuspenseQueryHookResult = ReturnType<typeof useGetRankSuspenseQuery>;
export type GetRankQueryResult = Apollo.QueryResult<GetRankQuery, GetRankQueryVariables>;
export const SearchEnchantDocument = gql`
    query SearchEnchant($keyword: String!) {
  search(keyword: $keyword) {
    id
    name
    nameEn
    isImp
    impName
    effect {
      name
      type
    }
    position
    positionName
    rank
    rankSeq
    route
    target
  }
}
    `;

/**
 * __useSearchEnchantQuery__
 *
 * To run a query within a React component, call `useSearchEnchantQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEnchantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEnchantQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchEnchantQuery(baseOptions: Apollo.QueryHookOptions<SearchEnchantQuery, SearchEnchantQueryVariables> & ({ variables: SearchEnchantQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchEnchantQuery, SearchEnchantQueryVariables>(SearchEnchantDocument, options);
      }
export function useSearchEnchantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchEnchantQuery, SearchEnchantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchEnchantQuery, SearchEnchantQueryVariables>(SearchEnchantDocument, options);
        }
export function useSearchEnchantSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchEnchantQuery, SearchEnchantQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchEnchantQuery, SearchEnchantQueryVariables>(SearchEnchantDocument, options);
        }
export type SearchEnchantQueryHookResult = ReturnType<typeof useSearchEnchantQuery>;
export type SearchEnchantLazyQueryHookResult = ReturnType<typeof useSearchEnchantLazyQuery>;
export type SearchEnchantSuspenseQueryHookResult = ReturnType<typeof useSearchEnchantSuspenseQuery>;
export type SearchEnchantQueryResult = Apollo.QueryResult<SearchEnchantQuery, SearchEnchantQueryVariables>;