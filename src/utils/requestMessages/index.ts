import type { IAPIError } from '@ts/interfaces';

import { showToast } from '@utils/toast';

import { defaultErrorMessage, defaultSuccessMessage } from './messages';

export const catchError = (catchError: unknown) => {
  const error = catchError as IAPIError;
  showToast(error.response?.data?.error || defaultErrorMessage, 'error');
};

export const success = (successResponse: unknown) => {
  const response = successResponse as IAPIError['response'];
  showToast(response?.data?.message || defaultSuccessMessage, 'success');
};
