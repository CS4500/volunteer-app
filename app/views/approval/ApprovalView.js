import React, { Component } from 'react';
import './approview.css';
import VolunteerApprovalContainer from '../../containers/VolunteerApprovalContainer/VolunteerApprovalContainer';
import {Link} from 'react-router';

class ApprovalView extends Component {
  render() {
      return (
          <div id="outer">
          	<div id= "volunteer">
          	    <h1> Volunteer Approval </h1> 
            	<VolunteerApprovalContainer />
            </div> 
            <div id ="hours">
            <h1> Hour Approval </h1> 
           		HOUR APPROVAL GOES HERE
            </div>
          </div>
      );
  }
}

export default ApprovalView
