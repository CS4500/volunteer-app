import React, { Component } from 'react';
import styles from './hourverification.scss';
var classNames = require('classnames');
import { Button, Grid, Row, Col, Panel } from 'react-bootstrap'

class HourVerification extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
               <Grid>
                   <Row>
                       <Panel className={classNames(styles.topLeft, 'col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-8')}>
                           <Row>
                               <Col xs={12} className={styles.topLeftTop}>
                                   Cat Sitting for cats in need
                               </Col>
                               <Col xs={12}>
                                   Animal Rescue League of Boston // Chinatown...
                               </Col>
                           </Row>
                       </Panel>
                       <Panel className={classNames(styles.topRight, 'col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-4')}>
                           <Row>
                               <Col xs={12}>
                                   340/430
                               </Col>
                               <Col xs={12}>
                                   Hours confirmed
                               </Col>
                           </Row>
                       </Panel>
                       <Panel className={classNames(styles.bottom, 'col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-12')}>
                           Bottom Carousel
                       </Panel>
                   </Row>
               </Grid>
            </div>

        );
    }
}

export default HourVerification