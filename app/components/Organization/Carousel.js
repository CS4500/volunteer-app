import React, { Component } from 'react';
import {Link} from 'react-router';
import {Carousel, CarouselItem} from 'react-bootstrap';

class carousel extends Component {
    render() {
        return (
            <div>
        		<Carousel>
        		    <CarouselItem>
                        <img className="center-block" width={500} height={200} alt="900x500" src='http://fffcpas.com/wp-content/uploads/2013/07/shutterstock_132746927.jpg'/>
                        <div className="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="center-block" width={500} height={200} alt="900x500" src='https://www.volunteerhq.org/sites/default/files/activity-ideas-when-volunteer-with-ivhq-mexico.jpg'/>
                        <div className="carousel-caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="center-block" width={500} height={200} alt="900x500" src='http://pftoday.com/wp-content/uploads/2015/03/freelancing-success-story-volunteer.jpg'/>
                        <div className="carousel-caption">
                            <h3>Third slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="center-block" width={500} height={200} alt="900x500" src='http://img.global.news.samsung.com/global/wp-content/uploads/2014/11/People-at-Samsung-built-houses_3.jpg'/>
                        <div className="carousel-caption">
                            <h3>Fourth slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="center-block" width={500} height={200} alt="900x500" src='http://www.uncompahgrewatershed.org/wp-content/uploads/2015/10/May2015WMAES_0835.jpg'/>
                        <div className="carousel-caption">
                            <h3>Fifth slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </CarouselItem>
  				</Carousel>
  			</div>
        );
    }
};
export default carousel;
