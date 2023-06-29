import { QueryClient } from '@tanstack/react-query';

export { TanstackQueryProvider } from './Provider';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      retry: 1
    }
  }
});
