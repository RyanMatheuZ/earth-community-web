import { Analytics } from '@vercel/analytics/react';

import { CacheProvider } from '@emotion/react';

import NextNProgress from 'nextjs-progressbar';

import type { IAppProps } from '@ts/interfaces';

import AuthProvider from '@context/auth';

import { TanstackQueryProvider } from '@services/tanstackQuery';

import { createEmotionCache } from '@utils/createEmotionCache';

import ThemeProviders from '@styles/themeProviders';

import { styledComponentsTheme } from '@styles/theme';

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
            <NextNProgress
              color={styledComponentsTheme.palette.secondary.main}
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
              showOnShallow={true}
            />
            <Component {...pageProps} />
            <Analytics />
          </TanstackQueryProvider>
        </ThemeProviders>
      </CacheProvider>
    </AuthProvider>
  );
};

export default App;
