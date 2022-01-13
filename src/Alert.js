import React, { Component } from 'react';

class Alert extends Component {
	constructor(props) {
		super(props);
		this.color = null; // children will override this
	}

	// getStyle function will define a basic style for color
	getStyle = () => {
		return {
			color: this.color,
		};
	}

	render() {
		return (
			<div className="Alert">
				<p style={this.getStyle()}>{this.props.text}</p>
			</div>
		);

	}

}

class InfoAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = 'blue';
	}
}

export { InfoAlert } ;

