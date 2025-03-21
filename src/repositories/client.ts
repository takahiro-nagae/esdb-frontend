import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const settingEndpoint = () => {
  let uri = '';
  switch (process.env.VITE_APP_ENV) {
    case 'dev':
      uri = 'http://localhost:3080';
      break;
    case 'stg':
      uri = 'https://n635e4bs85.execute-api.ap-northeast-1.amazonaws.com/stage';
      break;
    case 'prod':
      uri = 'https://vugeri8p1m.execute-api.ap-northeast-1.amazonaws.com/prod';
      break;
    default:
      uri = 'http://localhost:3080';
  }
  return uri;
};

const httpLink = createHttpLink({
  uri: `${settingEndpoint()}/query`,
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
