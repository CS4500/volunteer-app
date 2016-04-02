import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import styles from './loginForm.scss'

// a Login Form component
const LoginForm = (props) => (
            <Grid>
                <Row className={styles.form}>
                    <Col xs={10} xsOffset={1}>
                        <form className="form-horizontal" >
                            <Row>
                                <Input type="email" id="email" onChange={props.emailChange} label="Email:" placeholder="Enter Email"/>
                                <Input type="password" id="password" onChange={props.passwordChange} label="Password:" placeholder="Enter Password" />
                            </Row>
                            <Row className="form-group">
                                <Col sm={12} className="text-center">
                                    <Button bsSize="large" bsStyle="primary" onClick={props.handleLogin}>Login</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Grid>
)

export default LoginForm
