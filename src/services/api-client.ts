import axios, { AxiosRequestConfig } from "axios";
export interface GetResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bdcfe331e34f423c885b56bb0bf3d688",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<GetResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  get = (id: string | number) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}
export default APIClient;
