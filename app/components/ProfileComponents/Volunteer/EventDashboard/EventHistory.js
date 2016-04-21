import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import Icon from 'react-fa';
import EventTable from './EventTable'
import styles from './eventhistory.scss'
import LogHoursButton from './LogHoursButton'

const EventHistory = (props) => (
    <Col xs={12}className={styles.searchResults}>
        {props.events.map(function(event, index) {
            return (
                <Col key={index} xs={10} xsOffset={1} className={styles.col}>
                    <Col xs={12} className={styles.results}>
                        <Col xs={6} className={styles.name}>
                            {event.name}
                        </Col>
                        <Col xs={6} className={styles.detailsBtnCol}>
                            <LogHoursButton />
                        </Col>
                        <Col xs={6} className={styles.location}>
                            {event.address} {event.city} {event.state}
                        </Col>
                        <Col xs={6} className={styles.date}>
                            <div className={styles.text}>
                                {event.start_at.split(/[ \-\:]+/).splice(0,3).reverse().join("/")}
                            </div>
                        </Col>
                    </Col>
                </Col>
            );
        })}
    </Col>
);

export default EventHistory
