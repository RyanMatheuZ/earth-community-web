import { type AppProps } from 'next/app';

import AuthProvider from '@context/auth';

import ThemeProviders from '@styles/themeProviders';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      {ThemeProviders(<Component {...pageProps} />)}
    </AuthProvider>
  );
};

export default App;
