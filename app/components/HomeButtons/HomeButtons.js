import React, { Component } from 'react';
import {Link} from 'react-router'
import {Button, OverlayTrigger, Overlay, Popover} from 'react-bootstrap'
import LoginPopup from '../../components/HomeButtons/LoginPopup'
import styles from './homebutton.scss'

class HomeButton extends Component {

  	constructor(props) {
        super(props);
        
        this.state = {
            loggingIn : false
        };
    }

    renderActionSection() {
        if(this.state.loggingIn) {
            return(
                <LoginPopup
                onCancelClick = {this.onCancelClick.bind(this)} />
                )
        };
        return;
    }			

	render() {
	    return (
	    	<div className={styles.homebutton}>
		    	<div className={styles.button}>
		    		<OverlayTrigger trigger="click" onClick={this.onLoginClick.bind(this)} placement="bottom" overlay={<Popover id="login">{this.renderActionSection()}</Popover>}>
	                    <Button bsStyle="primary">Login</Button>                       
	                </OverlayTrigger>
		    	</div>
		    	<div className={styles.button}>
		    		<Link className={styles.link} to="/register">
		    			<Button bsStyle="primary">Sign up</Button>
		    		</Link>
		    	</div>
		    </div>
	    );
	}

	onLoginClick() {
        this.setState({ loggingIn: true });
    }
    onCancelClick() {
        this.setState({ loggingIn: false });
    }
}

export default HomeButton
