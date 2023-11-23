import ApiError from '@/exceptions/ApiException'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { getHost } from '@/utils/getHost'

export const apiRequest = async <T>(endpoint: string, method: string, params: any): Promise<T> => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const requestConfig: AxiosRequestConfig = {
    method,
    headers,
    data: {
      params,
    },
    baseURL: getHost(),
    url: endpoint !== '' ? endpoint : '/',
  }

  try {
    const { data } = await axios(requestConfig)

    if (data.error) {
      throw new ApiError(data.error.data.message ? data.error.data.message : data.error.message, data)
    }

    return data
  } catch (error) {
    throw new ApiError((error as ApiError).message ? (error as ApiError).message : 'Error', error)
  }
}
