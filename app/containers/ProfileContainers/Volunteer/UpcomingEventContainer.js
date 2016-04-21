import React, { PropTypes, Component } from 'react'
import FeaturedEvents from "../../../components/FeaturedEvents/FeaturedEvents";
import { fetchSearchEvents } from "../../../actions/events/searchEventsActions";
import UpcomingEvents from '../../../components/ProfileComponents/Volunteer/EventDashboard/UpcomingEvents'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

class FeaturedEventsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(
            fetchSearchEvents()
        );
    }

    render() {
        return (
            <Row>
                <UpcomingEvents events={this.props.events}/>
            </Row>
        )
    }
}

FeaturedEventsContainer.propTypes = {
    events: PropTypes.array.isRequired
};

FeaturedEventsContainer.defaultProps = {
    events: []
};

const mapStateToProps = (state) => ({events: state.featuredEvents.events});

export default connect(mapStateToProps)(FeaturedEventsContainer)
