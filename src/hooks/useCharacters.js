import { useQuery, gql } from '@apollo/client';

// The useQuery React hook is the primary API for executing queries in an Apollo application. We run a query within a React component by calling useQuery and passing it out GraphQL query string.

// When our component renders, useQuery returns an object from Apollo Client that contains loading, error and data properties that we can use to render our UI.

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
				id
				name
				image
			}
		}
	}
`;

export const useCharacters = () => {
	const { error, data, loading } = useQuery(GET_CHARACTERS);

	return {
		error,
		data,
		loading,
	};
};
