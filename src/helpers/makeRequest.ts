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

  const accToken = localStorage.getItem("accToken");
  let headers = {};
  if (accToken !== null) {
    headers = {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${accToken}`,
    };
  }

  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url,
      headers,
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
