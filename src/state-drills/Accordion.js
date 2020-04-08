import React from 'react';

class Accordion extends React.Component {
	state = {
        content: '',
        indexClick: null
	};

	handleDisplay() {
		return this.props.sections.map((e, index) => {
			return (
				<li key={index}>
					<button
						onClick={() => {
							return this.setState({ 
                                content: e.content,
                                indexClick: index
                            });
						}}
					>
						{e.title}
					</button>
                    {(this.state.indexClick=== index)&&<p>{this.state.content}</p>}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>
                    {this.handleDisplay()}
                </ul>
			</div>
		);
	}
}

export default Accordion;
