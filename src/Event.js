import React, { Component } from "react";

class Event extends Component {

    state = {
        details: false,
    }

    showDetails() {
        this.setState({
            details: !this.state.details
        });
    }

    render() {
        return (
        <div className="Event">
            <button onClick={() => this.showDetails()}>
                { this.state.details === false? "Show Details" : "Hide Details" }
            </button>
        </div>
      )
    }
}

export default Event;