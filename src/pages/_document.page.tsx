import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='pt-BR' translate='no'>
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
      </body>
    </Html>
  );
};

export default Document;
