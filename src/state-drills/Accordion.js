import React from 'react';

class Accordion extends React.Component {
	state = {
		content: '',
	};

	handleDisplay() {
		return this.props.sections.map((e, index) => {
			return (
				<li key={index}>
					<button
						onClick={() => {
							return this.setState({ content: e.content });
						}}
					>
						{e.title}
					</button>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>{this.handleDisplay()}</ul>
				<p>{this.state.content}</p>
			</div>
		);
	}
}

export default Accordion;
