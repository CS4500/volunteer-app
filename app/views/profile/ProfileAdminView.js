import React, { Component } from 'react';
import UsersHello from '../../containers/UsersHello'
import './divBox.css'
import {Link} from 'react-router';
import AboutMe from '../../components/aboutMe/AboutMe';
import ProfileAdminViewButtons from '../../components/ProfileAdminViewButtons/ProfileAdminViewButtons';
import FeaturedEvents from '../../containers/FeaturedEventsContainer';
require('bootstrap/dist/css/bootstrap.css');
  /// <div className="col-sm-2">
          //     <br/>
          //     <AboutMe/>
          // </div>
          class ProfileAdminView extends Component {
            render() {
              return (
                <div> 
                <div id="outer"> 
                <div className="col-sm-2 col-xs-12" id="lefttoc"><AboutMe/></div>
                <div className="col-sm-8 col-xs-12" id="maptoc">
                
                </div>

                <div className= "col-sm-2 col-xs-12" id="righttoc">
                  <h2>Admin Options</h2>
                  <ProfileAdminViewButtons />          
                </div>
                </div>
                </div> 

                );
              }
            }

            export default ProfileAdminView
