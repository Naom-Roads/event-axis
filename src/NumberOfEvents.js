import React, {Component} from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            query: value
        });
    }

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="text"
                    className="number"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        )
    }
}

export default NumberOfEvents;