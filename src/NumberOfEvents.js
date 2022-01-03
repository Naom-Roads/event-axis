import React, { Component } from 'react';
import { Alert, Dropdown } from 'react-bootstrap';


class NumberOfEvents extends Component {
	state = {
		numberOfEvents: 20,
		errorMsg: ''
	};

	handleSelect = (event) => {
		console.log(event);
		const value = event.target.value;
		if ( value < 1 ) {
			this.setState({
				numberOfEvents: '',
				infoMsg: 'Please select the number of events you would like to see'
			});
		} else {
			this.setState({
				numberOfEvents: value,
				errorMsg: ''
			});
		}
		this.props.updateNumberofEvents(event.target.value);
	};



	render() {
		return (
			<div className="NumberOfEvents">

				<Dropdown>
					<Dropdown.Toggle className="number-of-events mt-3" variant="#4CB944" id="dropdown-basic">
						Number Of Events
					</Dropdown.Toggle>

					<Dropdown.Menu

						title="Number of events dropdown"
						type='number'
						value={this.state.numberOfEvents}
						onSelect={this.handleSelect}
					>
					{[5, 10, 15, 20, 25, 30, 35].map(numberOfEvents => (
						<Dropdown.Item eventKey={numberOfEvents}>{numberOfEvents}</Dropdown.Item>
					))}
					</Dropdown.Menu>
				</Dropdown>

			</div>
		);
	}
}

export default NumberOfEvents;

{/*	<p><b>Number of Events:</b></p>*/}
{/*	<input*/}
{/*		type="number"*/}
{/*		name="number"*/}
{/*		className="number-of-events"*/}
{/*		value={this.props.numberOfEvents}*/}
{/*		onChange={(e) => this.handleInputChanged(e)}*/}
{/*	/>*/}
{/*	<ErrorAlert text={this.state.errorText} />*/}
{/*</div>*/}
