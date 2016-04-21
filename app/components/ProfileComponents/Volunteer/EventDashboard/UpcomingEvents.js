import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import Icon from 'react-fa';
import EventTable from './EventTable'
import styles from './upcomingevents.scss'

const UpcomingEvents = (props) => (
    <Col xs={12}className={styles.searchResults}>
        {props.events.map(function(event, index) {
            return (
                <Col key={index} xs={10} xsOffset={1} className={styles.col}>
                    <Col xs={12} className={styles.results}>
                        <Col md={10} xs={12}>
                            <Col xs={6} className={styles.name}>
                                {event.name}
                            </Col>
                            <Col xs={6} className={styles.date}>
                                <div className={styles.text}>
                                    {event.start_at.split(/[ \-\:]+/).splice(0,3).reverse().join("/")}
                                </div>
                            </Col>
                            <Col xs={12} className={styles.about}>
                                {event.about}
                            </Col>
                            <Col xs={12} className={styles.location}>
                                {event.address} {event.city} {event.state}
                            </Col>
                        </Col>
                        <Col md={2} xs={12} className={styles.detailsBtnCol}>
                            <Link className={styles.detailsBtnLink}to={"/event/" + event.id}>
                                <Icon className={styles.detailsBtn} name='arrow-right' size={'5x'}/>
                            </Link>
                        </Col>
                    </Col>
                </Col>
            );
        })}
    </Col>
);

export default UpcomingEvents