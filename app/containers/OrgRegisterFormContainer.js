import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginRequest } from '../actions/auth'
import {
    setName,
    setEmail,
    setPassword,
    setPasswordVerify,
    setPhone,
    setAddress,
    setPoc,
    setCity,
    setState,
    setZip,
    setMission,
    setContact,
    setError,
    removeError,
    reset,
    saveUser } from '../actions/registration'
import { push as pushRoute} from 'react-router-redux';
import OrgRegisterForm from '../components/RegisterForm/OrgRegisterForm'

class OrgRegisterFormContainer extends Component {

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.success) {
            nextProps.loginRequest({email: nextProps.user.email.value, passwordhash: nextProps.user.password.value})
                .then(function(response) {
                    nextProps.pushRoute('/profile');
                }.bind(nextProps));
        }
    }

    componentWillUnmount() {
        this.props.reset()
    }

    handleRegister() {
        this.props.saveUser(this.props.user, "organization")
    }

    nameChange(e) {
        this.props.setName(e.target.value)
    }

    emailChange(e) {
        this.props.setEmail(e.target.value)
    }

    passwordChange(e) {
        this.props.setPassword(e.target.value);
        this.props.setPasswordVerify(this.props.user.passwordVerify.value, e.target.value);
    }

    verifyPasswordChange(e) {
        this.props.setPasswordVerify(e.target.value, this.props.user.password.value)
    }

    phoneChange(e){
        this.props.setPhone(e.target.value);
    }

    pocChange(e){
        this.props.setPoc(e.target.value);
    }

    addressChange(e){
        this.props.setAddress(e.target.value);
    }

    cityChange(e){
        this.props.setCity(e.target.value);
    }

    stateChange(e){
        this.props.setState(e.target.value);
    }

    zipChange(e){
        this.props.setZip(e.target.value);
    }

    missionChange(e){
        this.props.setMission(e.target.value);
    }

    contactChange(e){
        this.props.setContact(e.target.value);
    }

    render() {
        return (
            <OrgRegisterForm handleRegister={this.handleRegister.bind(this)}
                             userData={this.props.user}
                             nameChange={this.nameChange.bind(this)}
                             emailChange={this.emailChange.bind(this)}
                             passwordChange={this.passwordChange.bind(this)}
                             verifyPasswordChange={this.verifyPasswordChange.bind(this)}
                             phoneChange={this.phoneChange.bind(this)}
                             pocChange={this.pocChange.bind(this)}
                             addressChange={this.addressChange.bind(this)}
                             cityChange={this.cityChange.bind(this)}
                             zipChange={this.zipChange.bind(this)}
                             stateChange={this.stateChange.bind(this)}
                             missionChange={this.missionChange.bind(this)}
                             errorMessage={this.props.error}/>
        );
    }
}

OrgRegisterFormContainer.propTypes = {
    user: PropTypes.object.isRequired,
    error: PropTypes.string
};


const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        saveUser,
        setName,
        setPassword,
        setPoc,
        setEmail,
        pushRoute,
        setError,
        reset,
        setPasswordVerify,
        setPhone,
        setAddress,
        setCity,
        setState,
        setZip,
        setMission,
        loginRequest}, dispatch)
);

const mapStateToProps = (state) => (
    {
        user: state.registration.user,
        error: state.registration.error,
        isSaving: state.registration.isSaving,
        success: state.registration.success
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(OrgRegisterFormContainer)
