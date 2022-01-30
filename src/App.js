import './App.css';
import CharacterList from './pages/CharacterList';
import Character from './pages/Character';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route strict exact path='/' element={<CharacterList />} />
				<Route exact path='/:id' element={<Character />} />
			</Routes>
		</div>
	);
}

export default App;
