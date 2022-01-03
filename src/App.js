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
		numberOfEvents: 20
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
		console.log(eventCount);

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
			console.log(locationEvents);
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
	};


	render() {
		return (
			<div className="App">

				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents}
				                updateEvents={this.updateEvents}/>
				<EventList events={this.state.events}/>

			</div>
		);
	}
}

export default App;
