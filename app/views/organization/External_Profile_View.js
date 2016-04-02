import React, { Component } from 'react';
import {Link} from 'react-router';
import Carousel from '../../components/Organization/Carousel.js';
import About from '../../components/Organization/About.js';
import {} from 'react-bootstrap';

class External_Profile_view extends Component {
    render() {
        return (
            <div >
                <div ><Carousel/></div>
                <div ><About/></div>
            </div>
            );
        }
    };
export default External_Profile_view;
