import React, { Component } from 'react';
import VolCarousel from '../../components/VolunteerApproval/VolunteerAppro'
import {Link} from 'react-router';
require('bootstrap/dist/css/bootstrap.css');
  /// <div className="col-sm-2">
          //     <br/>
          //     <AboutMe/>
          // </div>
          class ApprovalView extends Component {
            render() {
              return (
                
                <div id="outer"> 
                <VolCarousel /> 
                </div>
                

                );
              }
            }

            export default ApprovalView
