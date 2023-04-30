import axios from 'axios';

import { catchError, success } from '@utils/requestMessages';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`
});

axiosInstance.interceptors.response.use(
  (response) => {
    success(response);
    return response;
  },
  (error) => {
    return catchError(error);
  }
);

export default axiosInstance;
