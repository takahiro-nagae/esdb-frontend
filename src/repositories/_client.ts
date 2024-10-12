import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

const settingEndpoint = () => {
  switch (process.env.VITE_APP_ENV) {
    case 'dev':
      axios.defaults.baseURL = 'http://localhost:5001';
      break;
    case 'stg':
      axios.defaults.baseURL = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Stage/';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com:443';
      break;
    case 'prod':
      axios.defaults.baseURL = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com:443';
      break;
    default:
      axios.defaults.baseURL = 'http://localhost:5001';
  }
};

settingEndpoint();

export const internalApiClient = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from the API');
  }
};
