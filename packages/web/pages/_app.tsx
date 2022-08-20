import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
