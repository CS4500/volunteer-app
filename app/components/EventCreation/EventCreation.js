import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonInput, Input, OverlayTrigger, Popover, Modal} from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

const EventCreation = (props) => (
            <div>
                <Button bsStyle="primary" bsSize="small" onClick={this.open}>
                    Create Event
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form>
                                <Input type="text" label="Event Name"  onChange={props.nameChange} placeholder="Enter name" />
                                <h5> When </h5>
                                <DateTimeField />

                                <Input type="select" label="Time Commitment" placeholder="Number" />
                                <Input type="select" label="" placeholder="Units" />

                                <Input type="checkbox" label="Capped?" defaultChecked/>
                                <Input type="text" label="Capped Amount" placeholder="How many?" />

                                <Input type="text" label="Where" onChange={props.addressChange} placeholder="Address" />
                                <Input type="text" label="" placeholder="City" />
                                <Input type="select" label="" placeholder="State" />
                                <Input type="text" label="" onChange={props.zipcodeChange} placeholder="Zip Code" />
                                <Input type="select" label="Neighborhood" placeholder="Select Neighborhood" >
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </Input>

                                <Input type="select" label="Required Skills" multiple >
                                    <option value="select">multiple options tho</option>
                                    <option value="other">Integrity</option>
                                    <option value="other">Responsibility</option>
                                    <option value="other">Friendliness</option>
                                    <option value="other">...</option>
                                </Input>

                                <Input type="select" label="Event Manager" onChange={props.managerChange} placeholder="Event Manager">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </Input>

                                <Input type="textarea" label="Description" placeholder="What is this event about?" />

                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}> Submit </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );





{/**}

const EventCreation = (props) => {

    const CreationPopover =
        <Popover id="eventPopover" title="Event Creation">
            <div>
                <form>
                    <Input type="text" label="Event Name" placeholder="Enter name" />

                    <Input type="select" label="When" placeholder="Date" />
                    <h5> When </h5>
                    <DateTimeField />

                    <Input type="select" label="Time Commitment" placeholder="Number" />
                    <Input type="select" label="" placeholder="Units" />

                    <Input type="checkbox" label="Capped?" defaultChecked/>
                    <Input type="text" label="Capped Amount" placeholder="How many?" />

                    <Input type="text" label="Where" placeholder="Address" />
                    <Input type="text" label="" placeholder="City" />
                    <Input type="select" label="" placeholder="State" />
                    <Input type="text" label="" placeholder="Zip Code" />
                    <Input type="select" label="Neighborhood" placeholder="Select Neighborhood" >
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </Input>

                    <Input type="select" label="Required Skills" multiple >
                        <option value="select">multiple options tho</option>
                        <option value="other">Integrity</option>
                        <option value="other">Responsibility</option>
                        <option value="other">Friendliness</option>
                        <option value="other">...</option>
                    </Input>

                    <Input type="select" label="Event Manager" placeholder="Event Manager">
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </Input>

                    <Input type="textarea" label="Description" placeholder="What is this event about?" />

                </form>

                <Button onClick={props.confirmHours}> Submit </Button>
            </div>
        </Popover>;

    return (
        <OverlayTrigger trigger='click' placement='bottom' overlay={CreationPopover}>
            <Button bsStyle='primary' bsSize='large' active> Test event creation </Button>
        </OverlayTrigger>


    );
}
*/}
export default EventCreation