import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';
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
		<div className='CharacterList' key={data.characters.results.id}>
			{data.characters.results.map((character) => {
				return (
					<Link to={`/${character.id}`}>
						<img src={character.image} />
						<h2>{character.name}</h2>
					</Link>
				);
			})}
		</div>
	);
}
