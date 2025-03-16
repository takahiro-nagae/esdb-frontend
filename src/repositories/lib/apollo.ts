import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { CACHE_TIME_24H } from '@/const/cache';

const httpLink = createHttpLink({
  uri: 'http://localhost:3080/query',
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          yourQueryField: {
            keyArgs: ['id', 'filter', 'sort'],
            merge: true,
            read(existing: { __typename?: { cacheTime: number } } | null) {
              if (!existing) return existing;

              const cacheTime = existing.__typename
                ? existing.__typename.cacheTime
                : null;
              if (cacheTime && Date.now() - cacheTime > CACHE_TIME_24H) {
                return undefined;
              }
              return existing;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});
