import React from 'react';

class HelloWorld extends React.Component {
	state = {
		who: 'world',
	};

	handleClick = (e) => {
		this.setState({
			who: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<p>Hello, {this.state.who}</p>
				<button value='world' onClick={this.handleClick}>
					world
				</button>
				<button value='friend' onClick={this.handleClick}>
					Friend
				</button>
				<button value='react' onClick={this.handleClick}>
					React
				</button>
			</div>
		);
	}
}

export default HelloWorld;
