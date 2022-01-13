import React, { Component }            from 'react';
import './App.css';
import './nprogress.css';
import EventList                       from './EventList';
import CitySearch                      from './CitySearch';
import { extractLocations, getEvents } from './api';
import NumberOfEvents                  from './NumberOfEvents';


class App extends Component {
	state = {
		events: [],
		locations: [],
		location: 'all',
		numberOfEvents: ''
	};

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events, locations: extractLocations(events)
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}



	updateEvents = (location, eventCount) => {
		getEvents().then((events) => {
			let locationEvents;
			if (location) {
				this.setState({
					location: location
				});
				locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
			} else {
				locationEvents = (this.state.location === 'all') ? events : events.filter((event) => event.location === this.state.location);
			}
			if (eventCount) {
				this.setState({
					numberOfEvents: eventCount
				});
				locationEvents = locationEvents.slice(0, eventCount);
			} else {
				locationEvents = locationEvents.slice(0, this.state.numberOfEvents);
			}
			this.setState({
				events: locationEvents
			});
		});
	}

	updateNumberOfEvents = ( userInput ) => {
		const { currentLocation } = this.state;
		this.setState({
			numberOfEvents: userInput
		});
		this.updateEvents(currentLocation, userInput);
	};


	render() {
		return (
			<div className="App">

				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents}
				                updateNumberOfEvents={this.updateNumberOfEvents}
				                updateEvents={this.updateEvents}/>
				<EventList events={this.state.events}/>

			</div>
		);
	}
}

export default App;
