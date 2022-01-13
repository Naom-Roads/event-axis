import React, { Component } from 'react';
import { Dropdown }         from 'react-bootstrap';
import { ErrorAlert }       from './Alert';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 20,
		errorMsg: ''
	};

	handleSelect = (numberOfEvents) => {
		if (numberOfEvents < 1) {
			this.setState({
				numberOfEvents: ''
			});
		} else {
			this.setState({
				numberOfEvents: numberOfEvents
			});
		}
		this.props.updateEvents(undefined, numberOfEvents);
	};


	handleInput = (event) => {
		const value = event.target.value;
		if (value < 1 || value > 50) {
			this.setState({
				numberOfEvents: '',
				errorMsg: 'Please enter a number between 1 and 50',
			})
		} else {
			this.setState({
				numberOfEvents: value,
				errorMsg: '',

			});
		}
		this.props.updateNumberOfEvents(event.target.value);
	};


	render() {
		return (
			<div className="numberOfEvents">


				<Dropdown onSelect={this.handleSelect} className="dropdown">
					<Dropdown.Toggle variant="dark" className="number-of-events mt-3" id="dropdown-basic">
						Number Of Events
					</Dropdown.Toggle>

					<Dropdown.Menu
						title="Number of events dropdown"
						id="select-event"
					>
						{[5, 10, 15, 20, 25, 30, 35].map((numberOfEvents) => (
							<Dropdown.Item key={numberOfEvents}
							               eventKey={numberOfEvents}>{numberOfEvents}</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>

				<input
					placeholder="Type in Number of Events"
					type="text"
					name="number"
					className="number"
					value={this.props.numberOfEvents}
					onChange={(e) => this.handleInput(e)} />

	<ErrorAlert text={this.state.errorMsg}/>

			</div>
		);
	}
}

export default NumberOfEvents;

