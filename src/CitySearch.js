import React, { Component } from "react";


class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined

    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({ query: value, suggestions });
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false
        });
        this.props.updateEvents(suggestion);
    }

    render() {
        return (
            <div className="CitySearch">
                <p className="m-3"><b>Search by City</b></p>
            <input
                type="text"
                className="city"
                value={this.state.query}
                onChange={this.handleInputChanged}
                onFocus={() => { this.setState({ showSuggestions: true })
                }}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {}: {display: 'none'}} >
                    {this.state.suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}>
                            {suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked('all')} key='all'>
                        <b>See All Cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;
