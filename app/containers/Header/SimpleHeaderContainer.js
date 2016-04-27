import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import SimpleHeader from '../../components/Header/SimpleHeader';
import { bindActionCreators } from 'redux';
import {push as pushRoute } from 'react-router-redux';

// The header that can be seen on the home page
class SimpleHeaderContainer extends Component {
    logoutUser() {
        this.props.logout();
        this.props.pushRoute("/");
    }
    render() {
        return (<SimpleHeader isAuthenticated = {this.props.isAuthenticated}
                              route={this.props.route}
                              logoutUser = {this.logoutUser.bind(this) } /> );
    }
}

SimpleHeaderContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    route: state.router.locationBeforeTransitions.pathname

});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({logout, pushRoute}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleHeaderContainer)