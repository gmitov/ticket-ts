import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  url: string;
  config?: AxiosRequestConfig;
  auth?: {
    username: string;
    password: string;
  };
}

async function makeRequest<T>(options: RequestOptions): Promise<T> {
  const { method, body, url, config, auth } = options;

  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url,
      data: body,
      ...config,
      auth,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export default makeRequest;
