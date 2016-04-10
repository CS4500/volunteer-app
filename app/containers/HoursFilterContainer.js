import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSearchEvents, resetSearchEvents } from "../actions/events/searchEventsActions";
import { push as pushRoute } from 'react-router-redux';
import EventSearchResults from '../components/EventSearchResults/EventSearchResults'
import {Button, ButtonGroup, Input} from 'react-bootstrap'

//import VolunteerHoursAdmin from '../../components/ProfileAdminViewButtons/VolunteerHoursAdmin'
//import styles from './profileadminviewbuttons.scss'

//Displays a user's hours
const neighborhoods = [
       "Roxbury",
       "Beacon Hill",
       "Back Bay",
       "South Boston"
];

class HoursFilterContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            filter : "location"
        };
    }

    componentDidMount() {
        if (this.props.events.length > 0){
            this.props.fetchSearchEvents();
        }
    }

    componentWillUnmount(){
        this.props.resetSearchEvents();
    }

    searchForEvents() {
        this.props.fetchSearchEvents();
    }

    setTimeState() {
      this.setState({ filter: "time" });
    }

    setLocState() {
      this.setState({ filter: "location" });
    }

    setOrgState() {
      this.setState({ filter: "organization" });
    }

  renderFilterSection() {
    if(this.state.filter === "location") {
      return(
        <Input type="select" placeholder="Location">
          <option value="roxbury">Roxbury</option>
          <option value="beaconhill">Beacon Hill</option>
          <option value="backbay">Back Bay</option>
          <option value="southboston">South Boston</option>
        </Input>
        )
    }
    else if(this.state.filter === "organization") {
      return(
        <Input type="select" placeholder="Organization">
            <option value="americorps">Americorps</option>
            <option value="neu">NEU</option>
            <option value="examples">Examples</option>
        </Input>
        )
    }
    else if(this.state.filter === "time") {
      return(
        <div>
            <Input type="select" placeholder="Year">
                <option value="2015">2015</option>
                <option value="2016">2016</option>
            </Input>
            <Input type="select" placeholder="Month">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </Input>
        </div>
        )
    };
    return;
  }

  render() {
        return (
        <div>
          <h2>Total hours volunteered: {this.props.hours}</h2>
          <ButtonGroup>
            <Button onClick={this.setLocState.bind(this)}>Location</Button>
            <Button onClick={this.setOrgState.bind(this)}>Organization</Button>
            <Button onClick={this.setTimeState.bind(this)}>Time</Button> 
          </ButtonGroup>
          <div>
            {this.renderFilterSection()}
            <div>
                <Button onClick={this.searchForEvents.bind(this)} bsStyle="primary">Search</Button>
            </div>
          </div>
          <EventSearchResults events={this.props.events} />
        </div>
      );
    }
}

HoursFilterContainer.propTypes = {
    events: PropTypes.array.isRequired
};

HoursFilterContainer.defaultProps = {
    events: []
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ fetchSearchEvents, resetSearchEvents, pushRoute }, dispatch)
);

const mapStateToProps = (state) => (
    {events: state.searchEvents.events}
);

export default connect(mapStateToProps, mapDispatchToProps)(HoursFilterContainer)