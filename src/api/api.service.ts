import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.API_ENDPOINT,
});

export function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  return api.get<T, AxiosResponse<T>>(url, config);
}

export default api;
