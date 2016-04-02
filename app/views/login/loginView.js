import React, { Component } from 'react';
import LoginForm from '../../containers/LoginFormContainer'
import styles from './login.scss'
import {Link} from 'react-router'

class LoginView extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>Login</div>
                <div>
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default LoginView
