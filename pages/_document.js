import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  //   }

  render() {
    return (
      <Html lang="en-US">
        <Head>
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
