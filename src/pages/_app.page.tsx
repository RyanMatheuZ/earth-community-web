import { type AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';

import AuthProvider from '@context/auth';

import ThemeProviders from '@styles/themeProviders';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      {ThemeProviders(<Component {...pageProps} />)}
      <Analytics />
    </AuthProvider>
  );
};

export default App;
