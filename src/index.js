import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache(),
});
// https://rickandmortyapi.com/graphql

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// To use Apollo Client to send queries to our GraphQL server, we first need to install:
// graphql - provides core logic for parsing GraphQL queries
// @apollo/client - contains pretty much everything we need to build our client, including an in-memory cache, local state management, and error handling

// https://odyssey.apollographql.com/lift-off-part1/apollo-client-setup
