import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

class Event extends Component {

	state = {
		details: true
	};

	showDetails = () => {
		this.setState({
			details: !this.state.details
		});
	};

	render() {
		const {event} = this.props;
		const {details} = this.state;
		return (
			<div className="event">

				<h2 className="summary">{event.summary}</h2>

				<p className="start-date">{event.start.dateTime} ({event.start.timeZone})</p>
				<p className="location">@{event.summary} | {event.location}</p>

				<Button variant="outline-info"
				        className={`${details ? 'show' : 'hide'}-details`} onClick={this.showDetails}
				>
					{details ? "Show Details" : "Hide Details"}
				</Button>

				{!details &&
				<div className={`extra-details ${this.state.details
					? "hide" : "show"}`}>
					<h3>Event Details:</h3>
					<a href={event.htmlLink} rel="noreferrer" target="_blank">
						See Details on Google Calendar
					</a>
					<p className="event-description">{event.description}</p>
				</div>
				}
			</div>
		);
	}
}

export default Event;
