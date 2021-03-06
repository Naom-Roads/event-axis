import React, { Component }                                            from 'react';
import EventList                                                       from './EventList';
import CitySearch                                                      from './CitySearch';
import { extractLocations, getEvents, checkToken, getAccessToken }     from './api';
import NumberOfEvents                                                  from './NumberOfEvents';
import WelcomeScreen                                                   from './WelcomeScreen';
import { InfoAlert }                                                   from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [

]

class App extends Component {
	state = {
		events: [],
		locations: [],
		location: 'all',
		numberOfEvents: '',
		infoText: '',
		showWelcomeScreen: undefined,
	};

	async componentDidMount() {
		this.mounted = true;

		const accessToken = localStorage.getItem('access_token');
		const isTokenValid = !(await checkToken(accessToken)).error ;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get('code');

		this.setState({showWelcomeScreen: !(code || isTokenValid) });
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


	updateEvents = async (location, eventCount) => {
		getEvents().then((events) => {
			let locationEvents;
			if (location) {
				this.setState({
					location: location,
				});

				locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
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

	updateNumberOfEvents = async (userInput) => {
		const {currentLocation} = this.state;
		this.setState({
			numberOfEvents: userInput
		});
		await this.updateEvents(currentLocation, userInput);
	};

	getData = () => {
		const {locations, events} = this.state;
		const data = locations.map((location) => {
			const number = events.filter((event) => event.location === location).length
			const city = location.split(', ').shift()
			return {city, number};
		})
		return data;
	};

	render() {
		const { locations, numberOfEvents } = this.state;
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

				<h4>Events in each city</h4>

				<ScatterChart
					width={400}
					height={400}
					margin={{
						top: 20, right: 20, bottom: 20, left: 20,
					}}
				>
					<CartesianGrid />
					<XAxis type="number" dataKey="x" name="stature" unit="cm" />
					<YAxis type="number" dataKey="y" name="weight" unit="kg" />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} />
					<Scatter name="A school" data={data} fill="#8884d8" />
				</ScatterChart>

				<EventList events={this.state.events}/>

				<WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
				               getAccessToken={() => {getAccessToken() }} />

			</div>
		);
	}
}

export default App;
