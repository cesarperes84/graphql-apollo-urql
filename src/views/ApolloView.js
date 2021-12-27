import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Apollo from '../components/Apollo';
import logo from '../logo.svg';

const GITHUB_BASE_URL = '';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
   /* headers: {
    authorization: 'Bearer 2c58c422e185a6d0fe4b371a5c611f4cf6b30cd3',
  }, */
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

function ProfileView() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1><img src={logo} alt="Logo" width="100"/> GraphQL com Apollo</h1>
        <Apollo />
      </div>
    </ApolloProvider>
  );
}

export default ProfileView;
