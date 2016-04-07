import React, { Component } from 'react';
import {Link} from 'react-router';
import FeaturedEvents from '../../containers/FeaturedEventsContainer';


class About extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            photo : "https://www.volunteermatch.org/images/gallery/F22C5C44-0248-4E7D-14B6-B4E375504F2B_m?ts=1455301787000",
            name : "Ascend Hospice",
            mission : "Ascend Hospice A Better Choice for Specialized Hospice Care OUR MISSION Ascend Hospice is dedicated to providing innovative, quality care and wellness to our communities to help them live better lives. OUR VISION To be recognized as a trustworthy leader in healthcare, providing exceptional health and wellness programs, products and services; to exceed the expectations of those who rely on us for quality healthcare and wellness options; and to approach the rapidly changing healthcare industry with integrity, passion, and purpose. OUR VALUES People: Dedicated to serving all our communities with dignity and respect, while upholding ourselves to the same standards. Pride: Continually striving for excellence, honesty, and integrity in our care and services. Passion: Devoted to delivering exceptional service and compassionate care to our communities. Purpose: Committed to providing best-in-class care with everyone we connect with.",
            contacter: "Jennifer Fenuccio",
            phone : "866-508-8390",
            email : "Maisha.Cooper@ascendhealth.com",
            address : "100 Locke Drive",
            city : "Marlborough",
            state : "MA",
            zipCode : "01752"
        };
    }

    render() {
        return (
            <div className="container">
                <h2>{this.state.name}</h2>
                <img src={this.state.photo}  alt="user" className="img-responsive"/>
                <div className="container">
                    <h3>Mission</h3>
                    <p className="container">{this.state.mission}</p>
                </div>
                <div className="container">
                    <h3>Location</h3>
                    <div className="container">
                        <h4>{this.state.address}</h4> 
                        <h4>{this.state.city} {this.state.state} {this.state.zipCode}</h4>
                    </div>
                </div>
                <div className="container">
                    <h3>Upcoming Events</h3>
                    <div>
                        <FeaturedEvents/>
                    </div>
                </div>
                <div className="container">
                    <h3>Contact Us</h3>
                    <div className="container">
                        <p>{this.state.contacter}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.phone}</p>
                    </div>
                </div>
  			</div>
        );
    }
};

export default About;

