import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(apiUrl, httpClient);

export default dataProvider;
