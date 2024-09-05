// config/apolloClient.js
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// HTTP link to your GraphQL server
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT, // Replace with your endpoint
});

// Set up an auth link to include the Authorization header
const authLink = setContext((_, { headers }) => {
  // Get the token from local storage or any other secure storage
  // const token = lsocalStorage.getItem('authToken'); // Ensure you have the token stored securely
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpc0FkbWluIjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsInV1aWQiOiJmYTZlNDE5Yi0wYjQ1LTQ0ZDctODU1YS1jN2ZlOWNiZGY3MjMiLCJpYXQiOjE3MjU0MjgxMTEsImV4cCI6MTcyNTQzNTMxMX0.6wd-snXcZnoJrJGVtgEHmVTTRDJJwZsm5dMecyaVVvA';
  // Return the headers to the context so the HTTP link can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // Add the token to the Authorization header
    },
  };
});

// Combine the auth link and HTTP link
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
