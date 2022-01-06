import React        from 'react';
import { shallow }  from 'enzyme';
import Event        from '../Event';
import Button       from 'react-bootstrap/Button';
import { mockData } from '../mock-data';

describe("<Event /> component", () => {
	let EventWrapper;
	let event = mockData[0];
	beforeAll(() => {
		EventWrapper = shallow(<Event event={event}/>);
	});

	test('Modal should be collapsed by default', () => {
		EventWrapper.setState({
			details: true,
		});
		expect(EventWrapper.find('.extra-details').hasClass('hide')).toEqual(true);
	});

	test('display more details when clicked', () => {
		EventWrapper.find(Button).at(0).simulate("click");
		expect(EventWrapper.state('details')).toBeTruthy();
	});
});

