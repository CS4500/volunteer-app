import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './faq.scss'

const Faq = () => (
    <Grid className={styles.wrapper}>
        <h1>Tips and Frequently Asked Questions</h1>
        <p>This page has tips and Frequently asked questions for volunteers and organizations using this website</p>

        <Row>
            <Col xs={12} sm={6}>
                <div className={styles.questions}>
                    <h3>Volunteers</h3>
                    <ul className={styles.left}>
                        <li><a href="#v1">How do I sign up as a volunteer?</a></li>
                        <li><a href="#v2">How do I view my profile?</a></li>
                        <li><a href="#v3">How do I edit my profile?</a></li>
                        <li><a href="#v4">How can I search for and sign up for events?</a></li>
                        <li><a href="#v5">How do I view my events?</a></li>
                        <li><a href="#v6">How do I log my hours volunteered?</a></li>
                        <li><a href="#v7">How do I view the hours I have volunteered?</a></li>
                        <li><a href="#v8">Can organizations search for me?</a></li>
                    </ul>
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className={styles.questions}>
                    <h3>Organizations</h3>
                    <ul>
                        <li><a href="#o1">How can we register an organization and how many people make up an organization?</a></li>
                        <li><a href="#o2">How do I edit an organization profile?</a></li>
                        <li><a href="#o3">How can I create events as an organization?</a></li>
                        <li><a href="#o4">Can I confirm volunteers who have signed up for the event?</a></li>
                    </ul>
                </div>
            </Col>
        </Row>

        <div className={styles.answers}>
            <div>
                <h2>Volunteers</h2>
                <p id="v1" className={styles.questionheader}>How do I sign up as a volunteer?</p>
                <p>Navigate to the <a href="/register" target="_blank">sign up</a> page and fill out all the necessary information. Including your location, skills, and interests will help you find more relevant events to volunteer for</p>
                <p id="v2" className={styles.questionheader}>How do I view my profile?</p>
                <p>Once you sign up and log in <a href="/login" target="_blank">here</a>, the top menu will include a link to your profile.</p>
                <p id="v3" className={styles.questionheader}>How do I edit my profile?</p>
                <p>On the left-hand side of your profile is an “About me” box. There, click the “Edit Profile” button to change the details!</p>
                <p id="v4" className={styles.questionheader}>How can I search for and sign up for events?</p>
                <p>You can search for events both from the <a href="/index" target="_blank"> home page</a> and the <a href="/search" target="_blank">search page</a>. Just choose your preferred category and neighborhood, press the search button, and the results will appear on screen.</p>
                <p id="v5" className={styles.questionheader}>How do I view my events?</p>
                <p>Your profile page has two sections in the middle containing events you’ve completed (past events), and upcoming events that you’ve signed up for.</p>
                <p id="v6" className={styles.questionheader}>How do I log my hours volunteered?</p>
                <p>In the “Past Events” section in your profile, in the top right of each event box is a “log hours” button. Clicking on that button reveals a popup where you can enter the hours which you worked at the event.</p>
                <p id="v7" className={styles.questionheader}>How do I view the hours I have volunteered?</p>
                <p>On the right hand side of your profile are a few charts, and a button that says “More details”. Clicking on that button will bring you to the hours page, which has both the charts, and a more detailed filter system. This allows you to view hours you’ve volunteered per organization, with neighborhood, date, skills, and interest filters.</p>
                <p id="v8" className={styles.questionheader}>Can organizations search for me?</p>
                <p>Of course not! An organization can only view limited details about a user if they signed up for an upcoming event, and that’s it.</p>
            </div>
            <div>
                <h2>Organizations</h2>
                <p id="o1" className={styles.questionheader}>How can we register and organization and how many people make up an organization?</p>
                <p>An organization is considered one account, so only one person needs register for it. At the sign up page, click “Register as Organization” and fill out the relevant information. Remember, volunteers will be seeing your profile so make it look enticing!</p>
                <p id="o2" className={styles.questionheader}>How do I edit an organization profile?</p>
                <p>When signed in as an organization, view your organization and click the “Edit” button to change the details.</p>
                <p id="o3" className={styles.questionheader}>How can I create events as an organization?</p>
                <p>When signed in as an organization, view your organization and click the “Create event” button to bring up the event creation window, where you will fill in the necessary details.</p>
                <p id="o4" className={styles.questionheader}>Can I confirm volunteers who have signed up for the event?</p>
                <p>Yes!</p>
            </div>
        </div>


    </Grid>
);

export default Faq; 