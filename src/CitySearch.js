import React, { Component } from 'react';
import { ListGroup }        from 'react-bootstrap';
import { InfoAlert, ErrorAlert }        from './Alert';


class CitySearch extends Component {
	state = {
		query: '',
		suggestions: [],
		showSuggestions: false,
		errorMsg: '',
		infoText: ''
	};

	handleInputChanged = (event) => {
		const value = event.target.value;
		const notValid = new RegExp("^/\W/");
		const suggestions = this.props.locations.filter((location) => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		if (value === notValid) {
			this.setState({
				query: value,
				errorMsg: 'You can only use letters in your search',
			});
			console.log(value);
			console.log(notValid);

		} else if (suggestions.length === 0) {
			this.setState({
				query: value,
				infoText: 'We cannot find the city you are looking for. Please try again or try another city',
			});
		} else {
			return this.setState({
				query: value,
				suggestions,
				infoText: '',
				errorMsg: ''
			});
		}
	};
	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion,
			showSuggestions: false
		});
		this.props.updateEvents(suggestion);
	};

	render() {
		return (
			<div className="CitySearch m-auto">
				<ErrorAlert text={this.state.errorMsg}/>
				<InfoAlert text={this.state.infoText}/>
				<input
					placeholder="Search by City"
					type="text"
					className="city"
					value={this.state.query}
					onChange={this.handleInputChanged}
					onFocus={() => {
						this.setState({showSuggestions: true});
					}}
				/>
				<ListGroup variant="flush" className="suggestions" style={this.state.showSuggestions ? {} : {display: 'none'}}>
					{this.state.suggestions.map((suggestion) => (
						<ListGroup.Item
							key={suggestion}
							onClick={() => this.handleItemClicked(suggestion)}>
							{suggestion}</ListGroup.Item>
					))}
					<ListGroup.Item onClick={() => this.handleItemClicked('all')} key="all">
						<b>See All Cities</b>
					</ListGroup.Item>
				</ListGroup>
			</div>
		);
	}
}

export default CitySearch;
