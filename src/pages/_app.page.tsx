import { type AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';

import { QueryClientProvider } from '@tanstack/react-query';

import { CacheProvider, type EmotionCache } from '@emotion/react';

import AuthProvider from '@context/auth';

import { queryClient } from '@services/tanstackQuery';

import { createEmotionCache } from '@utils/createEmotionCache';

import ThemeProviders from '@styles/themeProviders';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: MyAppProps) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          {ThemeProviders(<Component {...pageProps} />)}
        </CacheProvider>
      </QueryClientProvider>
      <Analytics />
    </AuthProvider>
  );
};

export default App;
