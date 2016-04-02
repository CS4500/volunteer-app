import React, { Component } from 'react';
import {Link} from 'react-router';
import InternalAbout from '../../components/Organization/InternalAbout.js';
import {EventPanel, EventAccord} from '../../components/Panel';
import ProfileChart from '../../components/Organization/ProfileChart';
class Internal_Profile_view extends Component {
    render() {
        return (
        	<div>
	            <div className="col-sm-3">
	                <InternalAbout />
	            </div>
	            <div className="col-sm-6"> 
                    <div >
                        <h1> Upcoming Events</h1> 
                        <EventAccord />
                    </div> 
                    <div> 
                        <h1> Past Events </h1> 
                        <EventAccord /> 
                    </div> 
                </div>
                <div className= "col-sm-3">
                    <h3>Hour Allocation</h3>
                    <br/>
                    <h3>Year to Date</h3>
                    <h3>350</h3>
                    <br/>
                    <h3>Average volunteers / Event</h3>
                    <h3>200</h3>
                    <br/>
                    <ProfileChart />     
                </div> 
            </div>
            );
        }
    };
export default Internal_Profile_view;
