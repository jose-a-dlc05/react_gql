import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './CharacterList.css';

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

export default function CharacterList() {
	const { error, data, loading } = useQuery(GET_CHARACTERS);
	console.log(error, loading, data);

	if (loading) {
		return <div>Spinner...</div>;
	}

	if (error) {
		return <div>Something went wrong</div>;
	}

	return (
		<div className='CharacterList'>
			{data.characters.results.map((character) => {
				return (
					<div>
						<img src={character.image} />
						<h2>{character.name}</h2>
					</div>
				);
			})}
		</div>
	);
}
