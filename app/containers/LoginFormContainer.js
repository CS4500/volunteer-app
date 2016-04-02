import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginRequest,
         setEmail,
         setPassword } from '../actions/auth'
import { push as pushRoute} from 'react-router-redux';
import LoginForm from '../components/LoginForm/LoginForm'


class LoginFormContainer extends Component {

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isAuthenticated) {
      nextProps.pushRoute('/profile');
    }
  }

  handleLogin() {
    this.props.loginRequest({email: this.props.email, password: this.props.password})
  }

  emailChange(e) {
    this.props.setEmail(e.target.value)
  }

  passwordChange(e) {
    this.props.setPassword(e.target.value)
  }

  render() {
      return (
        <LoginForm handleLogin={this.handleLogin.bind(this)}
                   passwordChange={this.passwordChange.bind(this)}
                   emailChange={this.emailChange.bind(this)}/>
      );
  }
}

LoginFormContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({pushRoute, loginRequest, setEmail, setPassword }, dispatch)
)

const mapStateToProps = (state) => (
  { email: state.auth.user.email,
    password: state.auth.user.password,
    error: state.auth.error,
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
