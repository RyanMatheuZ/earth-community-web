import { Children } from 'react';

import Document,
{
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext
} from 'next/document';
import Script from 'next/script';

import { ServerStyleSheet } from 'styled-components';

import createEmotionServer from '@emotion/server/create-instance';

import { createEmotionCache } from '@utils/createEmotionCache';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          enhanceApp: (App: any) => (props) =>
            sheet.collectStyles(
              <App
                emotionCache={cache}
                {...props}
              />
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      const emotionStyles = extractCriticalToChunks(initialProps.html);
      const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ));

      return {
        ...initialProps,
        styles: [
          initialProps.styles, sheet.getStyleElement(),
          ...Children.toArray(initialProps.styles),
          ...emotionStyleTags
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        lang='pt-BR'
        translate='no'
      >
        <Head>
          <meta charSet='UTF-8' />
          <meta
            httpEquiv='X-UA-Compatible'
            content='IE=edge'
          />
          <meta
            name='robots'
            content='index, follow'
          />
          <meta
            name='format-detection'
            content='telephone=no'
          />

          <link
            rel='preconnect'
            href='https://fonts.googleapis.com'
          />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap' rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID});
            `}
          </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
