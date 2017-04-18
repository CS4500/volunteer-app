import React, { PropTypes, Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import styles from './orgprofilecontainer.scss'
import OrgAboutMeContainer from './OrgAboutMeContainer'
import UpcomingEvents from '../../../components/ProfileComponents/Volunteer/EventDashboard/UpcomingEvents'
import EventHistory from '../../../components/ProfileComponents/Volunteer/EventDashboard/EventHistory'
import ProfileChart from '../../../components/ProfileComponents/Volunteer/ProfileChart'

//TODO this needs its own event dashboard. It's too different from what a volunteer user should see to just use the same components
class OrgProfileContainer extends Component {

    componentDidMount() {
        //TODO maybe use this
    }

    render() {
        return (
            <Grid className={styles.wrapper}>
                <Row className={styles.profileContainer}>
                    <Col xs={12} sm={3} className={styles.aboutPanel}>
                        <OrgAboutMeContainer />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h2> Hello there, {this.props.user.name} Org</h2>
                        <div className={styles.eventToggle}>
                            <div>
                                <div>
                                    <h1> Upcoming Events</h1>
                                    <UpcomingEvents />
                                </div>
                            </div>
                            <div></div>
                            <div>
                                <h1> Past Events </h1>
                                <EventHistory />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={3}>
                        <h3>Hour Allocation</h3>
                        <br/>
                        <h3>Year to Date</h3>
                        <h3>350</h3>
                        <br/>
                        <h3>Average volunteers / Event</h3>
                        <h3>200</h3>
                        <br/>
                        <ProfileChart />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

OrgProfileContainer.propTypes = {
    user: PropTypes.object.isRequired
};


const mapStateToProps = (state) => (
{
    user: state.auth.user
}
);

export default connect(mapStateToProps)(OrgProfileContainer)
