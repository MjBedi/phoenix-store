import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import { CartStateProvider } from '../lib/cartState';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
// import withData from '../lib/withData';
import { useApollo } from '../lib/apollo';

// ----NProgress----

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// ------------------------------------MyApp

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mj" />
        <meta
          name="description"
          content="Buy dark and milk Chocolate box, bar and pack."
        />
        <meta property="og:title" content="Phoenix Store" />
        <meta property="og:description" content="Brief description" />
        <meta property="og:site_name" content="Phoenix Store" />
      </Head>

      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
