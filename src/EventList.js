import React, { Component } from 'react';
import Event from "./Event";
import Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <Row className="d-flex justify-content-center event-list-wrapper m-3">

                {events.map(event =>
                <Col className="p-2 mb-5" sm={12} md={6} lg={4} key={event.id}>
                    <Card border="dark">
                        <Card.Body>
                        <Event event={event}/>
                        </Card.Body>
                    </Card>

                 </Col>
                )}
            </Row>
        );
    }
}
export default EventList;
