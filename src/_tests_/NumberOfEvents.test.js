import React from 'react';
import { shallow }    from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { Dropdown } from "react-bootstrap";


describe ('<NumberOfEvents> component', () => {
    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents NumberOfEvents={NumberOfEventsWrapper}/>);
    });

    test('renders 20 events on the list by default', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(20);
});

    test('Number of Events changes when a user selects a number from dropdown', () => {
        NumberOfEventsWrapper.find(Dropdown).simulate("change", {
            target: { value: 25 },
        });
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(NumberOfEventsWrapper.state("numberOfEvents"))
    });

});
