import axios, { AxiosResponse } from 'axios';
import { QueryClient } from '@tanstack/react-query';

type Props = {
  url?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
  label?: string;
  toastSuccess?: boolean;
  successMessage?: string;
  params?: Record<string, unknown>;
  queryClient?: QueryClient;
};

export const api = async ({
  url = '',
  method = 'GET',
  headers = {},
  body,
  toastSuccess = false,
  successMessage = '',
  params = {},
}: Props) => {
  try {
    return await axios({
      url,
      method,
      headers,
      data: body,
      params,
    })
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      .then((response: AxiosResponse<any, any> | undefined) => {
        // handle error messages
        if (
          response?.data?.error &&
          (response?.data?.error !== 'false' || response?.data?.error !== false)
        ) {
          throw response?.data?.error;
        } else {
          if (toastSuccess || successMessage !== '') {
          }

          return response?.data;
        }
      })
      .catch((error) => {
        // handle status errors
        switch (error?.response?.status) {
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 404:
            break;
          case 500:
            break;
          default:
            break;
        }
      });
  } catch (error) {
    return error;
  }
};
