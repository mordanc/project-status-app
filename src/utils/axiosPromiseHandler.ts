import { AxiosPromise } from 'axios';

export const axiosPromiseHandler = async <T>(
  asyncFunction: Promise<AxiosPromise<T>>,
) => {
  let response;
  let error;
  try {
    response = await asyncFunction;
  } catch (e) {
    error = e;
  }
  return [response, error];
};
