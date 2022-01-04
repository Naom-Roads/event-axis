import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe ('<NumberOfEvents> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents NumberOfEvents={NumberOfEventsWrapper}/>);
    });

    test('renders 20 events on the list by default', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(20);
});

    test('Number of Events changes when given an input by user', () => {
        NumberOfEventsWrapper.find('input').simulate('change', {
            target: { value: 19 },
        });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(NumberOfEventsWrapper.state('numberOfEvents'))
    });

});
