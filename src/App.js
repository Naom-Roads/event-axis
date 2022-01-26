import React, { Component }                                        from 'react';
import EventList                                                   from './EventList';
import CitySearch                                                  from './CitySearch';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import NumberOfEvents                                              from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { InfoAlert } from './Alert';

class App extends Component {
	state = {
		events: [],
		locations: [],
		location: 'all',
		numberOfEvents: '',
		showWelcomeScreen: undefined,
	    infoText: '',
	};

	async componentDidMount() {
		this.mounted = true;
		const accessToken = localStorage.getItem('access_token');
		const isTokenValid = !(await checkToken(accessToken)).error;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get("code");
		this.setState({showWelcomeScreen: !(code || isTokenValid)});
		if ((code || isTokenValid) && this.mounted) {
			getEvents().then((events) => {
				if (!navigator.onLine) {
					this.setState({infoText:'You are currently offline, and the display has been loaded from cache'});
				}
				if (this.mounted) {
					this.setState({
						events, locations: extractLocations(events)
					});
				}
			});
		}
	}

	componentWillUnmount = () => {
		this.mounted = false;
	}


	updateEvents = (location, eventCount) => {
		getEvents().then((events) => {
			let locationEvents;
			if (location) {
				this.setState({
					location: location
				});

				locationEvents = (location === 'all') ?
					events : events.filter((event) => event.location === location);
				console.log(locationEvents);
			} else {
				locationEvents = (this.state.location === 'all') ?
					events : events.filter((event) => event.location === this.state.location);
			}
			if (eventCount) {
				this.setState({
					numberOfEvents: eventCount
				});
				locationEvents = locationEvents.slice(0, eventCount);
			} else if (this.state.numberOfEvents !== '') {
				locationEvents = locationEvents.slice(0, this.state.numberOfEvents);
			}
			this.setState({
				events: locationEvents
			});
		});
	};

	updateNumberOfEvents = (userInput) => {
		const {currentLocation} = this.state;
		this.setState({
			numberOfEvents: userInput
		});
		this.updateEvents(currentLocation, userInput);
	};


	render() {
		if (this.state.showWelcomeScreen === undefined) {
			return <div className="App"/>;
		}
		return (
			<div className="App">
				<InfoAlert text={this.state.infoText}/>
				<CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
				<NumberOfEvents numberOfEvents={this.state.numberOfEvents}
				                updateNumberOfEvents={this.updateNumberOfEvents}
				                updateEvents={this.updateEvents}/>
				<EventList events={this.state.events}/>

				<WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
				               getAccessToken={() => {
					               getAccessToken()
				               }}/>

			</div>
		);
	}
}

export default App;
