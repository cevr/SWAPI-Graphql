import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'https://momentum-app.herokuapp.com/',
});
