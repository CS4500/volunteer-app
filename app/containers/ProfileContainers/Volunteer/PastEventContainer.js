import React, { PropTypes, Component } from 'react'
import FeaturedEvents from "../../../components/FeaturedEvents/FeaturedEvents";
import { fetchSearchEvents } from "../../../actions/events/searchEventsActions";
import EventHistory from '../../../components/ProfileComponents/Volunteer/EventDashboard/EventHistory'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

class PastEventContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchSearchEvents()
        );
    }

    render() {
        return (
            <Row>
                <EventHistory events={this.props.events}/>
            </Row>
        )
    }
}

PastEventContainer.propTypes = {
    events: PropTypes.array.isRequired
};

PastEventContainer.defaultProps = {
    events: []
};

const mapStateToProps = (state) => ({events: state.featuredEvents.events});

export default connect(mapStateToProps)(PastEventContainer)
