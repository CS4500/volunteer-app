import React, { Component } from 'react';
import {Link} from 'react-router';
import AboutMe from '../../components/Volunteer/AboutMe';
import HoursFilterContainer from '../../containers/HoursFilterContainer';
import ProfileChart from '../../components/Volunteer/ProfileChart';

class HoursView extends Component {
    render() {
        return (
            <div id="outer">
                <div className="col-sm-6 col-xs-12">
                    <ProfileChart/>
                    <h3>whats supposed to go here?</h3>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <HoursFilterContainer />
                </div>
            </div>
        );
    }
}

export default HoursView
