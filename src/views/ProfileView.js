import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Profile from '../components/Profile';
import Menu from '../components/comons/Menu';
import logo from '../logo.svg';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
   headers: {
    authorization: 'Bearer 2c58c422e185a6d0fe4b371a5c611f4cf6b30cd3',
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

function ProfileView() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1><img src={logo} alt="Logo" width="100"/> Apollo com API GITHUB</h1>
          <Menu />
          <Profile />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default ProfileView;
