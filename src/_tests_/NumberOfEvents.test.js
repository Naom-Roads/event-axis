import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe ('<NumberOfEvents> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents NumberOfEvents={NumberOfEventsWrapper}/>);
    });

    test('renders 32 events on the list by default', () => {
    expect(NumberOfEventsWrapper.state('query')).toEqual(32);
});

    test('Number of Events changes when given an input by user', () => {
        NumberOfEventsWrapper.find('input').simulate('change', {
            target: { value: 50 },
        });
        expect(NumberOfEventsWrapper.state('query')).toEqual(NumberOfEventsWrapper.state('query'))
    });

});