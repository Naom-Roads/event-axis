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
		locations: []
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

	updateEvents = (location) => {
		getEvents().then((events) => {
			const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
			this.setState({
				events: locationEvents
			});
		});
	};

	updateNumberOfEvents = (eventCount) => {
		const {currentLocation} = this.state;
		this.setState({
			numberOfEvents: eventCount
		});
		this.updateEvents(currentLocation, eventCount);
	};

	render() {
		return (
			<div className="App">

				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents}
				                updateNumberofEvents={this.updateNumberOfEvents}/>
				<EventList events={this.state.events}/>

			</div>
		);
	}
}

export default App;
