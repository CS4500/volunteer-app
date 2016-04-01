import React, { Component } from 'react';
import {Link} from 'react-router';
import Carousel from '../../components/Organization/Carousel.js';
require('bootstrap/dist/css/bootstrap.css');
class External_Profile_view extends Component {
    render() {
        return (
            <div>
                <div ><Carousel/></div>
            </div>
            );
        }
    };
export default External_Profile_view;
