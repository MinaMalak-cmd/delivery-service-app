import { BASE_API } from "./config";

const setRequestConfigurations = (timeout = 2000) =>{
  return {
    headers:{
      "Content-Type": "application/json",
      "Authorization":`HDHJkejk__${localStorage.getItem('access-token')}`
    },
    timeout: timeout,
    responseType: 'json' as const,
  };
} 

const get = async (url: string, timeout = 2000) => {
  try {
    const options = setRequestConfigurations();
    const response = await BASE_API.get(url, options);
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const post = async (url: string, body? : any, timeout = 2000) => {
  try {
    const options = setRequestConfigurations();
    const response = await BASE_API.post(url, body ,options);
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const update = async (url: string, body? : any, timeout = 2000) => {
  try {
    const options = setRequestConfigurations();
    const response = await BASE_API.put(url, body ,options);
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const patch = async (url: string, body? : any, timeout = 2000) => {
  try {
    const options = setRequestConfigurations();
    const response = await BASE_API.patch(url, body ,options);
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};
const deleteRequest = async (url: string, timeout = 2000) => {
  try {
    const options = setRequestConfigurations();
    const response = await BASE_API.delete(url, options);
    return response;
  } catch (error: any) {
    console.log("🚀 ~ file: axiosConfig.ts:8 ~ error:", error);
  }
};

export { get, post, deleteRequest, update, patch };


// axios.interceptors.request.use(
//     config => {
//         // config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
//         return config;
//     },
// )

