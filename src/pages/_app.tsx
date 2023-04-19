import { type AppProps } from 'next/app';

import ThemeProviders from '@styles/themeProviders';

const App = ({ Component, pageProps }: AppProps) => {
  return ThemeProviders(
    <Component {...pageProps} />
  );
};

export default App;
