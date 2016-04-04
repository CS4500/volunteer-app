import React, { Component } from 'react';
import {Link} from 'react-router'
import {Button, OverlayTrigger, Overlay, Popover, Modal } from 'react-bootstrap'
import ExternalHours from '../../components/ProfileAdminViewButtons/ExternalHours'
import styles from './profileadminviewbuttons.scss'

// CLPrompt stands for Category Location Prompt. the dropdowns dont really work
class ProfileAdminViewButtons extends Component {

  	constructor(props) {
        super(props);
        
        this.state = {
            viewingUser : false,
            removingUser : false
        };
    }

    close() {
        this.setState({ viewingUser: false });
    }

    open() {
        this.setState({ viewingUser: true });
        this.onCancelClick();
    }

    renderActionSection() {
        if(this.state.removingUser) {
          return(
              <div>
                <Modal.Body>
                    <h3>Are you sure you want to remove this user?</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-danger">Remove</Button>
                    <Button bsStyle="default" onClick={this.onCancelClick.bind(this)}>Cancel</Button>
                </Modal.Footer>
              </div>
            )
        };
        return;
    }

	render() {
	    return (
	    	<div>
                <div>
                    <Button 
                        bsStyle="primary"
                        onClick={this.open.bind(this)}>
                        View hours
                    </Button>
                    <div className={styles.button}>
                        <OverlayTrigger trigger="click" onClick={this.onRemoveClick.bind(this)} placement="left" overlay={<Popover id="remove">{this.renderActionSection()}</Popover>}>
                            <Button bsStyle="primary">Remove User</Button>                       
                        </OverlayTrigger>
                    </div>
                </div>
		    	

                 <Modal show={this.state.viewingUser} onHide={this.close.bind(this)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Hours for {this.props.username}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ExternalHours />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close.bind(this)}>Close</Button>
                  </Modal.Footer>
                </Modal>

		    </div>
	    );
	}

    onCancelClick() {
        this.setState({ removingUser: false})
    }
    onRemoveClick() {
        this.setState({ removingUser: true})
    }
}

export default ProfileAdminViewButtons
