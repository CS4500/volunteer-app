import React, { Component } from 'react';
import {Link} from 'react-router'
import {Button, ButtonGroup, Input} from 'react-bootstrap'
import VolunteerHoursAdmin from '../../components/ProfileAdminViewButtons/VolunteerHoursAdmin'
import styles from './profileadminviewbuttons.scss'

//Displays a user's hours
const neighborhoods = [
       "Roxbury",
       "Beacon Hill",
       "Back Bay",
       "South Boston"
];

class ExternalHours extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            filter : "location"
        };
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
        <p>lolComingSoon (TM)</p>
        )
    };
    return;
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
          </div>
          <VolunteerHoursAdmin />
        </div>
      );
  }
}



export default ExternalHours