import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setName,
    setMonth,
    setDay,
    setYear,
    setAddress,
    setCap,
    setZipcode,
    setManager,
    setDescription,
    setError,
    removeError,
    reset,
    saveEvent,
    updateEvent,
    openModal,
    closeModal } from '../../../actions/events/eventManipulationAction';
import { push as pushRoute} from 'react-router-redux';
import EventCreation from '../../../components/ProfileComponents/Organization/EventManipulation'


class EventCreationContainer extends Component {

    componentWillUpdate(nextProps, nextState)
    {
        if (nextProps.success) {
            nextProps.pushRoute('/profile');
        }
    }

    componentWillUnmount()
    {
        this.props.reset()
    }

    checkForm(){
        if (!this.props.event.name){
            this.props.setError("Event needs a name")
            return false;
        }
        if (!this.props.event.month) {
            this.props.setError("Event needs a month")
            return false;
        }
        if (!this.props.event.day) {
            this.props.setError("Event needs a day")
            return false;
        }
        if (!this.props.event.year) {
            this.props.setError("Event needs a year")
            return false;
        }
        if (!this.props.event.address) {
            this.props.setError("Event needs an address")
            return false;
        }
        if (!this.props.event.zipcode) {
            this.props.setError("Please specify a zipcode")
            return false;
        }
        if (this.props.event.manager) {
            this.props.setError("Please enter an event manager")
            return false;
        }
        if (this.props.event.manager) {
            this.props.setError("Please enter an event manager")
            return false;
        }
        return true;
    }

    handleCreation() {
        if (this.checkForm()) {
            if (this.props.newEvent) {
                this.props.saveEvent(this.props.event)
            }
            else{
                this.props.updateEvent(this.props.event)
            }
        }
    }

    nameChange(e) {
        this.props.setName(e.target.value)
    }
    monthChange(e) {
        this.props.setMonth(e.target.value)
    }
    dayChange(e) {
        this.props.setMonth(e.target.value)
    }
    yearChange(e) {
        this.props.setMonth(e.target.value)
    }
    capChange(e) {
        this.props.setCap(e.target.value)
    }

    addressChange(e) {
        this.props.setAddress(e.target.value)
    }

    zipcodeChange(e) {
        this.props.setZipcode(e.target.value)
    }

    managerChange(e) {
        this.props.setManager(e.target.value)
    }
    descriptionChange(e) {
        this.props.setDescription(e.target.value)
    }

    openModal() {
        this.props.openModal();
    }

    closeModal() {
        this.props.closeModal();
    }
    render() {
        return (
            <EventCreation handleEvent={this.handleCreation.bind(this)}
                           nameChange={this.nameChange.bind(this)}
                           monthChange={this.monthChange.bind(this)}
                           dayChange={this.dayChange.bind(this)}
                           yearChange={this.yearChange.bind(this)}
                           capChange={this.capChange.bind(this)}
                           addressChange={this.addressChange.bind(this)}
                           zipcodeChange={this.zipcodeChange.bind(this)}
                           managerChange={this.managerChange.bind(this)}
                           descriptionChange={this.descriptionChange.bind(this)}
                           errorMessage={this.props.error}
                           isEditing={this.props.isEditing}
                           openModal={this.openModal.bind(this)}
                           closeModal={this.closeModal.bind(this)} />
        );
    }
}

EventCreationContainer.propTypes = {
    event: PropTypes.object,
    isEditing: PropTypes.bool.isRequired,
    error: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    newEvent: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ saveEvent, updateEvent, setName, setMonth, setDay, setYear, setAddress, pushRoute, setError, reset, setZipcode, setManager, openModal, closeModal}, dispatch)
)

const mapStateToProps = (state) => (
{ event: state.eventcreation.event,
    error: state.eventcreation.error,
    isSaving: state.eventcreation.isSaving,
    success: state.eventcreation.success,
    isEditing: state.eventcreation.isEditing
}
)

export default connect(mapStateToProps, mapDispatchToProps)(EventCreationContainer)

