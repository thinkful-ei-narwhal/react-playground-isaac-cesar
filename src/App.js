import React from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';

function App() {
	const sections = [
		{
		  title: 'Section 1',
		  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
		  title: 'Section 2',
		  content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
		},
		{
		  title: 'Section 3',
		  content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
		},
	  ]

	return (
		<div className='App'>
			<HelloWorld />
			<Bomb />
			<RouletteGun bulletInChamber={5} />
			<Accordion sections= {sections}/>
		</div>
	);
}

export default App;
