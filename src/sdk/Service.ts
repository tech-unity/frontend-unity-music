import axios, { AxiosResponse } from 'axios';

const Http = axios.create();

class Service {
  protected static Http = Http;
  protected static getData = getData;
}

function getData<T>(response: AxiosResponse<T>) {
  return response.data;
}

Http.defaults.baseURL = process.env.REACT_APP_API_HOST;

export default Service;
