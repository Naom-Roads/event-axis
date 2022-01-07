import React                          from 'react';
import { mount, shallow }             from 'enzyme';
import EventList                      from '../EventList';
import Event                          from '..//Event';
import { getEvents }                  from '../api';
import App                            from '../App';
import { mockData }                   from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {

	test('An event element is collapsed by default', ({given, when, then}) => {
		let EventListWrapper;
		given('user has just opened up the main page', async () => {
			EventListWrapper = shallow(<EventList events={mockData}/>);
		});
		when('user views the events', () => {
			EventListWrapper = shallow(<EventList events={mockData}/>);
			expect(EventListWrapper.find('.EventList')).toHaveLength(1);
		});
		let EventWrapper;
		then('user will see them all collapsed by default', () => {
			EventWrapper = shallow(<Event event={mockData[0]}/>);
			expect(EventWrapper.state('.details')).toEqual(false);
		});
	});
	test('User can expand an event to see its details', ({given, when, then}) => {
		let EventWrapper;
		given('user is viewing the events list', async () => {
			EventWrapper = shallow(<Event event={mockData[0]}/>);
			expect(EventWrapper.state('details')).toEqual(true);
		});
		when('user clicks on the “Show Details” button', () => {
			const showDetails = EventWrapper.find('.show-details');
			showDetails.simulate('click');
		});
		then('the module will expand to show details for the event', () => {
			expect(EventWrapper.state('.details')).toEqual(false);
		});
	});

	test('User can collapse an event to hide its details', ({given, when, then}) => {
		let EventWrapper;
		given('user is viewing un-collapsed module', async () => {
			EventWrapper = shallow(<Event event={mockData[0]}/>);
			EventWrapper.setState({details: true});
		});
		when('user click ons the “Hide Details” button', () => {
			EventWrapper.setState({details: false});
			EventWrapper.find('.hide-details').simulate('click');
		});
		then('the event module will collapse and hide details', () => {
			expect(EventWrapper.state('.details')).toEqual(true);
		});
	});

});
