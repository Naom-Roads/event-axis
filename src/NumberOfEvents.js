import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';


class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 20,
		errorMsg: ''
	};

	handleSelect = (numberOfEvents) => {
		if ( numberOfEvents < 1 ) {
			this.setState({
				numberOfEvents: '',
				infoMsg: 'Please select the number of events you would like to see'
			});
		} else {
			this.setState({
				numberOfEvents: numberOfEvents,
				errorMsg: ''
			});
		}
		this.props.updateEvents(undefined, numberOfEvents);
	};

	render() {
		return (
			<div className="numberOfEvents">

				<Dropdown onSelect={this.handleSelect} className='dropdown'>
					<Dropdown.Toggle variant="dark" className="number-of-events mt-3" id="dropdown-basic">
						Number Of Events
					</Dropdown.Toggle>

					<Dropdown.Menu
						title="Number of events dropdown"
						id="select-event"

					>
					{[5, 10, 15, 20, 25, 30, 35].map((numberOfEvents) => (
						<Dropdown.Item key={numberOfEvents} eventKey={numberOfEvents}>{numberOfEvents}</Dropdown.Item>
					))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}

export default NumberOfEvents;

