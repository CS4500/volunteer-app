import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import FullHeader from '../../components/Header/FullHeader';
import { bindActionCreators } from 'redux';
import {push as pushRoute } from 'react-router-redux';

// The wrapper for the header component that is visible on the user profile page
class FullHeaderContainer extends Component {
    logoutUser() {
        this.props.logout();
        this.props.pushRoute("/");
    }
    render() {
        return (<FullHeader isAuthenticated = {this.props.isAuthenticated}
                            logoutUser = {this.logoutUser.bind(this) }
                            route={this.props.route}/>);
    }
}

FullHeaderContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    route: state.router.locationBeforeTransitions.pathname
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({logout, pushRoute}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FullHeaderContainer)