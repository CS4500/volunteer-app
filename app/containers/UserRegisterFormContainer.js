import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginRequest } from '../actions/auth'
import {
    setEmail,
    setName,
    setPassword,
    setPasswordVerify,
    setPhone,
    setGender,
    setBirthdate,
    setLocation,
    setEducation,
    setSkills,
    setInterests,
    setBio,
    setContact,
    setError,
    removeError,
    reset,
    saveUser } from '../actions/registration'
import { push as pushRoute} from 'react-router-redux';
import UserRegisterForm from '../components/RegisterForm/UserRegisterForm'

class UserRegisterFormContainer extends Component {

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.success) {
      nextProps.loginRequest({email: nextProps.user.email.value, passwordhash: nextProps.user.password.value})
        .then(function(response) {
          nextProps.pushRoute('/profile');
        }.bind(nextProps));

    }
  }

  nameChange(e) {
    this.props.setName(e.target.value)
  }

  componentWillUnmount() {
    this.props.reset()
  }


  handleRegister() {
    this.props.saveUser(this.props.user, "volunteer")
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

  genderChange(e){
    this.props.setGender(e.target.value);
  }

  birthYearChange(e){
    var day = '';
    var month = '';
    if (this.props.user.birthdate.value) {
      day = this.props.user.birthdate.value.split("/")[0];
      month = this.props.user.birthdate.value.split("/")[1];
    }
    this.props.setBirthdate(day, month, e.target.value);
  }

  birthMonthChange(e){
    var day = '';
    var year = '';
    if (this.props.user.birthdate.value) {
      day = this.props.user.birthdate.value.split("/")[0];
      year = this.props.user.birthdate.value.split("/")[2];
    }
    this.props.setBirthdate(day, e.target.value, year);
  }

  birthDayChange(e){
    var month = '';
    var year = '';
    if (this.props.user.birthdate.value) {
      month = this.props.user.birthdate.value.split("/")[1];
      year = this.props.user.birthdate.value.split("/")[2];
    }
    this.props.setBirthdate(e.target.value, month, year);
  }

  educationChange(e){
    this.props.setEducation(e.target.value);
  }

  locationChange(e){
    this.props.setLocation(e.target.value);
  }

  skillsChange(e){
    this.props.setSkills(e.target.value, this.props.user.skills.value);
  }

  interestsChange(e){
    this.props.setInterests(e.target.value, this.props.user.interests.value);
  }

  bioChange(e){
    this.props.setBio(e.target.value);
  }

  contactChange(e){
    this.props.setContact(e.target.value);
  }

  render() {
      return (
          //Note entire props can be also just be passed as <UserRegisterForm {props}>
          <UserRegisterForm handleRegister={this.handleRegister.bind(this)}
                            nameChange={this.nameChange.bind(this)}
                            emailChange={this.emailChange.bind(this)}
                            userData={this.props.user}
                            passwordChange={this.passwordChange.bind(this)}
                            verifyPasswordChange={this.verifyPasswordChange.bind(this)}
                            phoneChange={this.phoneChange.bind(this)}
                            genderChange={this.genderChange.bind(this)}
                            birthDayChange={this.birthDayChange.bind(this)}
                            birthMonthChange={this.birthMonthChange.bind(this)}
                            birthYearChange={this.birthYearChange.bind(this)}
                            locationChange={this.locationChange.bind(this)}
                            skillsChange={this.skillsChange.bind(this)}
                            interestsChange={this.interestsChange.bind(this)}
                            bioChange={this.bioChange.bind(this)}
                            contactChange={this.contactChange.bind(this)}
                            errorMessage={this.props.error}/>
      );
  }
}

UserRegisterFormContainer.propTypes = {
  user: PropTypes.object.isRequired,
  error: PropTypes.string
};


const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        saveUser,
        setPassword,
        setName,
        setEmail,
        pushRoute,
        setError,
        reset,
        setPasswordVerify,
        setPhone,
        setGender,
        setBirthdate,
        setEducation,
        setLocation,
        setSkills,
        setInterests,
        setBio,
        setContact,
        loginRequest }, dispatch)
);

const mapStateToProps = (state) => (
  {
    user: state.registration.user,
    error: state.registration.error,
    isSaving: state.registration.isSaving,
    success: state.registration.success
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterFormContainer)
