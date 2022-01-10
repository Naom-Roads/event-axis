import React                          from 'react';
import { mount, shallow }             from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { Dropdown }                   from 'react-bootstrap';
import App                            from '../App';
import { mockData }                   from '../mock-data';
import NumberOfEvents                 from '../NumberOfEvents';
import EventList                      from '../EventList';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {

	test('When user hasn’t specified a number, 20 is the default number.', ({given, when, then}) => {
		let AppWrapper;
		let NumberOfEventsWrapper;
		given('a user has opened the app', async () => {
         AppWrapper = mount(<App />);
			NumberOfEventsWrapper = shallow(<NumberOfEvents />);
		});

		when('user has not specified a number', () => {
			NumberOfEventsWrapper.setState({numberOfEvents: 20});
		});

		then('default number is 20', () => {
			expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(20);
		});
	});

	test('User can change the number of events they want to see', ({given, when, then}) => {
		let AppWrapper;
		let EventListWrapper;
		let NumberOfEventsWrapper;
		given('a user is viewing the list of events', async () => {
			AppWrapper = mount(<App />);
			NumberOfEventsWrapper = shallow(<NumberOfEvents />);
			EventListWrapper = shallow(<EventList events={mockData}/>);
			NumberOfEventsWrapper.setState({numberOfEvents: 20});
		});
		when('a user clicks on the drop-down menu and selects a number of events to view', () => {
			const NumberOfEventsDropdown = NumberOfEventsWrapper.find(Dropdown);
			NumberOfEventsWrapper.setState({numberOfEvents: 20});
			NumberOfEventsDropdown.simulate('change', { target:{ value: 25}});

		});
		then('a the page will show the number of events specified by the user', () => {
         expect(NumberOfEventsWrapper.state('dropdown')).toEqual(NumberOfEventsWrapper.state({numberOfEvents: 25}));
		});
	});

});
