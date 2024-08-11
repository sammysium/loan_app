import { ApolloClient, InMemoryCache } from '@apollo/client';
import { EndPoints } from '@config/EndPoints';

const client = new ApolloClient({
  uri: EndPoints.graphql,
  cache: new InMemoryCache(),
});

export default client;