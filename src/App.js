import React from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
	return (
		<div className='App'>
			<HelloWorld />
			<Bomb />
			<RouletteGun bulletInChamber={5} />
		</div>
	);
}

export default App;
