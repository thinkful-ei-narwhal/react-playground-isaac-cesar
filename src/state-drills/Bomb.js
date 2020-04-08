import React from 'react';

class Bomb extends React.Component {
	state = {
		count: 0,
	};

	componentDidMount() {
		const callback = (e) => {
			this.setState({
				count: this.state.count + 1,
			});
		};
		this.interval = setInterval(callback, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	renderCount() {
		const { count } = this.state;
		if (count % 2 === 0) {
			return <p>tick</p>;
		} else if (count < 8) {
			return <p>tock</p>;
		} else {
			clearInterval(this.interval);
			return <p>bomb</p>;
		}
	}

	render() {
		return <div>{this.renderCount()}</div>;
	}
}

export default Bomb;
