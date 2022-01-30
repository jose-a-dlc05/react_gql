import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import './CharacterList.css';

export default function CharacterList() {
	const { error, data, loading } = useCharacters();
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
