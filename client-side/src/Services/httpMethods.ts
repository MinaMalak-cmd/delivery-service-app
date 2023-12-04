import { BASE_API } from "./config";
const headers = {
  "Content-Type": "application/json",
};

const get = async (url: string, timeout = 2000) => {
  try {
    const response = await BASE_API.get(url, {
      headers:headers,
      timeout: timeout,
      responseType: 'json',
    });
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const post = async (url: string, body? : any, timeout = 2000) => {
  try {
    const response = await BASE_API.post(url, body ,{
      headers:headers,
      timeout: timeout,
      responseType: 'json',
    });
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const update = async (url: string, body? : any, timeout = 2000) => {
  try {
    const response = await BASE_API.put(url, body ,{
      headers:headers,
      timeout: timeout,
      responseType: 'json',
    });
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const deleteRequest = async (url: string, timeout = 2000) => {
  try {
    const response = await BASE_API.delete(url, {
      headers:headers,
      timeout: timeout,
      responseType: 'json',
    });
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};

export { get, post, deleteRequest, update };


// axios.interceptors.request.use(
//     config => {
//         // config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
//         return config;
//     },
// )

