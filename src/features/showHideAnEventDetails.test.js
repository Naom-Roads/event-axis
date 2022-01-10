import React                          from 'react';
import { mount, shallow }             from 'enzyme';
import { Button }                     from 'react-bootstrap';
import EventList                      from '../EventList';
import Event                          from '../Event';
import { getEvents }                  from '../api';
import App                            from '../App';
import { mockData }                   from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {

	test('An event element is collapsed by default', ({given, when, then}) => {
		let AppWrapper;
		let EventWrapper;
		given('user has just opened up the main page', async () => {
			AppWrapper = mount(<App />);
			EventWrapper = shallow(<Event event={mockData[0]}/>);
		});
		when('user has not clicked on the "Show Details" button', () => {
			EventWrapper.setState({details: false});
		});
		then('user will see them all collapsed by default', () => {
			expect(EventWrapper.state('details')).toEqual(false);

		});
	});


	test('User can expand an event to see its details', ({given, when, then}) => {
		let AppWrapper;
		let EventWrapper;
		given('user is viewing the events list', async () => {
			AppWrapper = mount(<App />)
			EventWrapper = shallow(<Event event={mockData[0]}/>);
			EventWrapper.setState({details: false});
		});
		when('user clicks on the “Show Details” button', () => {
			console.log(EventWrapper.find(Button));
			const showDetails = EventWrapper.find(Button);
			showDetails.simulate('click');
		});
		then('the module will expand to show details for the event', () => {
			expect(EventWrapper.state('details')).toEqual(true);
		});
	});

	test('User can collapse an event to hide its details', ({given, when, then}) => {
		let EventWrapper;
		given('user is viewing un-collapsed module', async () => {
			EventWrapper = shallow(<Event event={mockData[0]}/>);
			EventWrapper.setState({details: true});
		});
		when('user click ons the “Hide Details” button', () => {

			EventWrapper.find(Button).simulate('click');
		});
		then('the event module will collapse and hide details', () => {
			expect(EventWrapper.state('details')).toEqual(false);
		});
	});

});
