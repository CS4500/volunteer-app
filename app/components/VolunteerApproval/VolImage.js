import React, { Component } from 'react';
import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';

 var VolPopover = 
    <Popover id="volconfirm" title="Volunteer Confirmation">
    <div>
    <h3> Profile Info + Skills </h3> 
    <h5> PULL FROM PROFILE HERE </h5> 
    <br/> 
    <h3> Volunteer History </h3> 
    <h5> PULL FROM PROFILE HERE </h5> 


    <Button> Confirm </Button>
    </div> 
    </Popover> 

  var HourPopover = 
    <Popover id="hrconfirm" title="Hour Confirmation">
    <div>
    <h5>Start Time:</h5> 
    <h5>End Time:</h5> 
    <h5>Total: </h5> 
    <Button> Submit </Button>
    </div> 
    </Popover>    


    var VolImage = React.createClass({ 
        render: function(){ 

            return (

                <OverlayTrigger trigger='click' placement='bottom' overlay={VolPopover}>
                <img src='http://placekitten.com/g/400/200' />
                </OverlayTrigger>

                );
        }
    });


    var HourImage = React.createClass({ 
        render: function(){ 

            return (

                <OverlayTrigger trigger='click' placement='bottom' overlay={HourPopover}>
                <img src='http://placekitten.com/g/400/200' />
                </OverlayTrigger>

                );
        }
    });

  
module.exports = {
    VolImage,
    HourImage
}


