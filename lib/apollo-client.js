import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'آدرس_سایت_وردپرس_شما/graphql', // اینجا بعداً آدرس هاست را می‌گذارید
  cache: new InMemoryCache(),
});

export default client;