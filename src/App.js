import './App.css';
import CharacterList from './pages/CharacterList';
import Character from './pages/Character';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route strict exact path='/' element={<CharacterList />} />
				<Route strict exact path='/search' element={<Search />} />
				<Route exact path='/:id' element={<Character />} />
			</Routes>
		</div>
	);
}

export default App;
