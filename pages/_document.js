import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Mj" />
          <meta
            name="description"
            content="Buy dark and milk Chocolate box, bar and pack."
          />
          <meta property="og:title" content="Phoenix Store" />
          <meta property="og:description" content="Brief description" />
          <meta property="og:site_name" content="Phoenix Store" />
          {/* <meta property="og:image" content="/some-image.png" />
          <meta property="og:url" content="/this-page.html" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="image description" /> */}

          <link rel="icon" type="image/png" href="/static/favicon.png" />

          <script src="https://checkout.razorpay.com/v1/checkout.js" />
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
