import { Analytics } from '@vercel/analytics/react';

import { CacheProvider } from '@emotion/react';

import type { IAppProps } from '@ts/interfaces';

import AuthProvider from '@context/auth';

import { TanstackQueryProvider } from '@services/tanstackQuery';

import { createEmotionCache } from '@utils/createEmotionCache';

import ThemeProviders from '@styles/themeProviders';

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: IAppProps) => {
  return (
    <AuthProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProviders>
          <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <Analytics />
          </TanstackQueryProvider>
        </ThemeProviders>
      </CacheProvider>
    </AuthProvider>
  );
};

export default App;
