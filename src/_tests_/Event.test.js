import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { oneEvent } from "../mock-data";

describe('<Event /> component', () => {
    const EventWrapper = shallow(<Event event={oneEvent} />);
    test('display more details when clicked', () => {
        console.log(EventWrapper.find('button'));
        EventWrapper.find('button').at(0).simulate('click');
        expect(EventWrapper.state('details')).toBeTruthy();
    });
});

