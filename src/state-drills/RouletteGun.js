import React, { Component } from 'react';

export default class RouletteGun extends Component {
	state = {
		spinningTheChamber: false,
		chamber: null,
	};

	static defaultProps = {
		bulletInChamber: 8,
	};

	handleTrigger = () => {
		this.setState({
			spinningTheChamber: true,
		});

		setTimeout(() => {
			let num = Math.ceil(Math.random() * 8);

			this.setState({
				chamber: num,
				spinningTheChamber: false,
			});
		}, 2000);
	};

	renderDisplay = () => {
		const { spinningTheChamber, chamber } = this.state;

		if (spinningTheChamber) {
			return <p>spinning the chamber and pulling the trigger! ...</p>;
		}

		if (chamber === this.props.bulletInChamber) {
			return <p>BANG!!!</p>;
		}

		return <p>you're safe!!</p>;
	};

	render() {
		console.log(this.state.chamber);
		return (
			<div>
				{this.renderDisplay()}
				<button onClick={this.handleTrigger}>Pull the trigger!</button>
			</div>
		);
	}
}
