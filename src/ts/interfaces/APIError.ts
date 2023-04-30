import type { TErrors } from '@ts/types';

interface IAPIError {
  message?: string;
  type?: TErrors;
  displayMessage?: string;
  response?: {
    data?: string;
  }
}

export default IAPIError;
