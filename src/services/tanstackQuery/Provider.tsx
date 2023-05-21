import { type FC, type PropsWithChildren } from 'react';

import { QueryClientProvider, Hydrate, type DehydratedState } from '@tanstack/react-query';

import { queryClient } from './index';

interface TanstackQueryProviderProps extends PropsWithChildren {
  dehydratedState: DehydratedState;
}

export const TanstackQueryProvider: FC<TanstackQueryProviderProps> = ({ children, dehydratedState }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
    </QueryClientProvider>
  );
};
