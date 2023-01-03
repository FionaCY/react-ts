import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig,
    AxiosError
} from 'axios';
import { message as Message } from "antd";

​
const service: typeof AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000
})

service.interceptors.request.use((config: typeof AxiosRequestConfig) => {
    return config;
}, (error: typeof AxiosError) => {
    Message.error(error.message);
    return Promise.reject(error);
})

service.interceptors.response.use((response: typeof AxiosResponse) => {
    const { code, message, data } = response.data;
    if (code === 0) {
        return data
    } else {
        Message.error(message)
        return Promise.reject(new Error(message))
    }
}, (error: typeof AxiosError) => {
    Message.error('系统错误') 
    return Promise.reject(error)
})

export const http = {
     get<T=any>(url: string, config?: typeof AxiosRequestConfig) : Promise<T> {
       return service.get(url, config)
     },
   ​
     post<T=any>(url: string, data?: object, config?: typeof AxiosRequestConfig) :Promise<T> {
       return service.post(url, data, config)
     },
   ​
     put<T=any>(url: string, data?: object, config?: typeof AxiosRequestConfig) :Promise<T> {
       return service.put(url, data, config)
     },
   ​
     delete<T=any>(url: string, config?: typeof AxiosRequestConfig) : Promise<T> {
       return service.delete(url, config)
    }
}
   