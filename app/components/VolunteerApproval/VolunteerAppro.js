import React, { Component } from 'react';
import './appro.css';
import {Panel} from 'react-bootstrap';
import MultiCarousel from '../../components/MultiItemCarousel';
//import { Button, ButtonToolbar, Input, OverlayTrigger, Popover} from 'react-bootstrap';
require('bootstrap/dist/css/bootstrap.css');


var EventInfo = React.createClass({ 
	render: function(){ 

		return(
			<div id="top"> 
			<div id="eventinfo">
			<Panel>
			<h3> EVENT NAME THO </h3> <br/> 
			<h5> Location &#47;&#47; date </h5> 
			</ Panel>
			</div> 
			<div id="hourinfo">
			<Panel> 
			<h3> # &#47; # </h3> <br/> 
			<h5> Volunteers approved </h5> 
			</Panel>
			</div> 
			</div>

			);

	}

});


	var VolCarousel = React.createClass({
		render: function(){ 

			return ( 
			<div> 
			<EventInfo /> 
			<div id="carousel">
			<MultiCarousel /> 
			</div>
			</div>

			);
		}
	});

	module.exports = VolCarousel;