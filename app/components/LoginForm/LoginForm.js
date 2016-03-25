import React, { Component } from 'react';
require('bootstrap/dist/css/bootstrap.css');
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import styles from './loginForm.scss'

// a Login Form component
class LoginForm extends Component {
    render() {
        return (
            <Grid>
                <Row className={styles.form}>
                    <Col xs={10} xsOffset={1}>
                        <form className="form-horizontal" >
                            <Row>
                                <Input type="email" id="email" label="Email:" placeholder="Enter Email"/>
                                <Input type="password" id="password" label="Password:" placeholder="Enter Password" />
                            </Row>
                            <Row className="form-group">
                                <Col sm={12} className="text-center">
                                    <Button bsSize="large" bsStyle="primary" type="submit">Login</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default LoginForm
