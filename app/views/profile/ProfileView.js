import React, { Component } from 'react';
import './divBox.css'
import {Link} from 'react-router';
<<<<<<< HEAD
import AboutMe from '../../components/Profile/AboutMe';
import ProfileChart from '../../components/Profile/ProfileChart';
import FeaturedEvents from '../../containers/FeaturedEventsContainer';
<<<<<<< HEAD
import VolCarousel from '../../components/VolunteerApproval/VolunteerAppro'
          class ProfileView extends Component {
            render() {
              return (
                
                <div id="outer"> 
=======
import EventHistory from '../../components/EventDashboard/EventHistory'
import UpcomingEvents from '../../components/EventDashboard/UpcomingEvents'
import AboutMe from '../../components/aboutMe/AboutMe';
import ProfileChart from '../../components/ProfileChart/ProfileChart';
import FeaturedEvents from '../../containers/FeaturedEventsContainer';

class ProfileView extends Component {
    render() {
        return (
            <div id="outer">
>>>>>>> upstream/master
                <div className="col-sm-2 col-xs-12" id="lefttoc"><AboutMe/></div>
                <div className="col-sm-8 col-xs-12" id="maptoc">
                    <h2> Hello there! </h2>
                    <div id="inner">
                        <div id="box1">
                            <h1> Confirmed Events</h1>
                            <UpcomingEvents />
                        </div>
                        <div id="box2">
                            <h1> Unconfirmed Events </h1>
                            <UpcomingEvents />
                        </div>
                    </div>
                    <div className='clearfix'></div>
                    <div id="bottom">
                        <h1> Event History </h1>
                        <EventHistory />
                    </div>
                </div>
                <div className= "col-sm-2 col-xs-12" id="righttoc">
                    <br/>
                    <FeaturedEvents />
                    <h3>Hours</h3>
                    <br/>
                    <h3>All Time: 32</h3>
                    <br/>
                    <h3> Last Month: 6</h3>
                    <ProfileChart />
                </div>
<<<<<<< HEAD
=======
  /// <div className="col-sm-2">
          //     <br/>
          //     <AboutMe/>
          // </div>
          class ProfileView extends Component {
            render() {
              return (
                <div> 
                    <div id="outer"> 
                    <div className="col-sm-2 col-xs-12" id="lefttoc"><AboutMe/></div>
                    <div className="col-sm-8 col-xs-12" id="maptoc">
                    <h2> Hello there! </h2>
                    <div id="inner"> 
                        <div id="box1">
                            <h1> Confirmed Events</h1> 
                            <EventAccord />
                        </div> 
                        <div id="box2"> 
                            <h1> Unconfirmed Events </h1> 
                            <EventAccord /> 
                        </div> 
                    </div> 
                        <div id="bottom">
                            <h1> Event History </h1> 
                            <EventPanel /> 
                        </div> 
                    </div> 
                    <div className= "col-sm-2 col-xs-12" id="righttoc">
                        <br/>
                        <FeaturedEvents />
                        <h3>Hours</h3>
                        <br/>
                        <h3>All Time: 32</h3>
                        <br/>
                        <h3> Last Month: 6</h3>
                        <br/>
                        <ProfileChart />     
                    </div>
                    </div>
                </div> 
>>>>>>> add-organization
=======
            </div>
        );
    }
}
>>>>>>> upstream/master

export default ProfileView
