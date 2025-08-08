import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const locale = this.props.__NEXT_DATA__.props.pageProps.locale || 'en';

    return (
      <Html lang={locale}>
        <Head>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' type='image/jpeg' href='/img/favicon.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />

          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=fallback'
            as='style'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=fallback'
            rel='stylesheet'
            media='print'
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=fallback'
              rel='stylesheet'
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
