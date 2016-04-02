import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setEmail,
         setPassword,
         setPasswordVerify,
         setError,
         removeError,
         reset,
         saveUser } from '../actions/registration'
import { push as pushRoute} from 'react-router-redux';
import UserRegisterForm from '../components/RegisterForm/UserRegisterForm'

// a Login Form component
//TODO connect the rest of the form
class UserRegisterFormContainer extends Component {

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.success) {
      nextProps.pushRoute('/profile');
    }
  }

  componentWillUnmount() {
    this.props.reset()
  }

  checkForm() {
    if (!this.props.user.email) {
      this.props.setError("please enter an email")
      return false;
    }
    if (!this.props.user.password) {
      this.props.setError("please enter a password")
      return false;
    }
    if (!this.props.user.passwordVerify) {
      this.props.setError("please verify your password")
      return false;
    }
    if (this.props.user.password !== this.props.user.passwordVerify) {
      this.props.setError("passwords do not match")
      return false;
    }
    return true;
  }

  handleRegister() {
    if (this.checkForm()) {
      this.props.saveUser(this.props.user)
    }
  }

  emailChange(e) {
    this.props.setEmail(e.target.value)
  }

  passwordChange(e) {
    this.props.setPassword(e.target.value)
  }

  verifyPasswordChange(e) {
    this.props.setPasswordVerify(e.target.value)
  }

  render() {
      return (
        //Note entire props can be also just be passed as <UserRegisterForm {props}>
        <UserRegisterForm handleRegister={this.handleRegister.bind(this)}
                          passwordChange={this.passwordChange.bind(this)}
                          emailChange={this.emailChange.bind(this)}
                          verifyPasswordChange={this.verifyPasswordChange.bind(this)}
                          errorMessage={this.props.error}/>
      );
  }
}

UserRegisterFormContainer.propTypes = {
  user: PropTypes.object.isRequired,
  error: PropTypes.string
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ saveUser, setPassword, setEmail, pushRoute, setError, reset, setPasswordVerify }, dispatch)
)

const mapStateToProps = (state) => (
  { user: state.registration.user,
    error: state.registration.error,
    isSaving: state.registration.isSaving,
    success: state.registration.success
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterFormContainer)
