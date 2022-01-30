import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_CHARACTER_LOCATION = gql`
	query GetCharacterLocations($name: String!) {
		characters(filter: { name: $name }) {
			results {
				location {
					name
				}
			}
		}
	}
`;

export default function Search() {
	const [name, setName] = useState('');

	const [getLocations, { error, loading, data, called }] = useLazyQuery(
		GET_CHARACTER_LOCATION,
		{
			variables: {
				name,
			},
		}
	);

	// console.log({
	// 	error,
	// 	data,
	// 	loading,
	// 	called,
	// });

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => getLocations()}>Search</button>
			{loading && <div>spinner...</div>}
			{error && <div>something went wrong</div>}
			{data && (
				<ul key={data.characters.results}>
					{data.characters.results.map((character) => {
						return (
							<li key={character.location.id}>{character.location.name}</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
