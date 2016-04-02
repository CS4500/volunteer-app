import React, { Component } from 'react';
import Slider from 'react-slick';
import {VolImage, HourImage} from './VolunteerApproval/VolImage';
var MultiCarousel = React.createClass({
  render: function() {
  	var settings = {
    	dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll:3
    }
    return (
    	<div className='container'>
      	<Slider {...settings}>
        	<VolImage />
          <VolImage />
          <VolImage />
          <HourImage />
        </Slider>
      </div>
    );
  }
});

    module.exports = MultiCarousel; 

