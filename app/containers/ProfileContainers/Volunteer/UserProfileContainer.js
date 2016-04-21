import React, { PropTypes, Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router';
import styles from './userprofilecontainer.scss'
import AboutMeContainer from './UserAboutMeContainer'
import UpcomingEvents from '../../../components/ProfileComponents/Volunteer/EventDashboard/UpcomingEvents'
import EventHistory from '../../../components/ProfileComponents/Volunteer/EventDashboard/EventHistory'
import FeaturedEventsContainer from '../../FeaturedEventsContainer'
import ProfileChart from '../../../components/ProfileComponents/Volunteer/ProfileChart'
import Icon from 'react-fa';

class UserProfileContainer extends Component {

    //TODO: Move to our state container, no props are passed
    constructor(props) {
      super(props);
      this.state = {
          toggle: "upcoming"
      };
    }

    // toggle switches to other binary state
    toggleEvents(state) {
      this.setState({toggle: state});
    }

    // TODO: For the most part there should be not templating/jsx here, should
    // go into a stateless component. Each panel could be a component.
    render() {
        return (
                <Row className={styles.profileContainer}>

                    <Col xs={12} lg={3} className={styles.aboutPanel}>
                        <AboutMeContainer />
                    </Col>


                    <Col xs={12} lg={6}  className={styles.eventsPanel}>


                        <div className={styles.eventToggle}>
                          {/* wrap in function to evaluate later*/}
                          <div  className={(this.state.toggle === 'upcoming') ? styles.accent : styles.item} onClick={()=>(this.toggleEvents("upcoming"))}>  Upcoming Events</div>
                          <div  className={(this.state.toggle === 'history') ? styles.accent : styles.item} onClick={()=>(this.toggleEvents("history"))}>  Past Events </div>
                        </div>

                        <div>
                          {(this.state.toggle === 'upcoming') ? <UpcomingEvents /> : <EventHistory /> }
                        </div>

                    </Col>


                    {/* TODO: hours not connected */}
                    <Col xs={12} lg={3} className={styles.rightPanel}>
                        <FeaturedEventsContainer />
                        <div className={styles.hours}>
                          <h3 className={styles.title}> <Icon name="clock-o" size={'1x'} /> Hours</h3>
                          <p><bold>All Time:</bold> 32</p>
                          <p><bold>Last Month:</bold>  6</p>
                        </div>
                        <ProfileChart className={styles.chart} />
                        <Link to="/hours">
                            <Button bsStyle="primary">More details</Button>
                        </Link>
                    </Col>
                </Row>
        )
    }
}

UserProfileContainer.propTypes = {
    toggle: PropTypes.string.isRequired
};

UserProfileContainer.defaultProps = {
    toggle: "upcoming"
};

export default UserProfileContainer
