import React, { Component } from 'react';
import AboutMe from './AboutMe.js';
import ReactDOM from 'react-dom';
import { Modal, form, Button, Input } from 'react-bootstrap';

class Popup extends Component {
    render() {                   
        return  (
            <div className="static-modal">  
                <Modal.Header>
                    <Modal.Title>Editing User Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        type="text"
                        defaultValue={this.props.name}
                        placeholder="The name showing in your profile"
                        label="Name"
                        ref="nameInput"
                        groupClassName="group-class"
                        labelClassName="label-class"
                    />
                    <Input
                        type="text"
                        defaultValue={this.props.phone}
                        placeholder="The phone number that you can be reached"
                        label="Phone"
                        ref="phoneInput"
                        groupClassName="group-class"
                        labelClassName="label-class"
                    />
                    <Input
                        type="email"
                        defaultValue={this.props.email}
                        placeholder="The email address that you can be reached"
                        label="Email"
                        ref="emailInput"
                        groupClassName="group-class"
                        labelClassName="label-class"
                    />
                    <Input
                        type="textarea"
                        defaultValue={this.props.about}
                        placeholder="A short description of yourself"
                        label="About me"
                        ref="aboutInput"
                        groupClassName="group-class"
                        labelClassName="label-class"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-success" onClick={this.props.onSaveClick}>Save</Button>
                    <Button type="button" className="btn btn-danger" onClick={this.props.onCancelClick}>Cancel</Button>
                </Modal.Footer>
            </div>
            )
       }
                            
}

export default Popup