import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer/Footer';

// The website footer
class FooterContainer extends Component {

    render() {
        return (<Footer addTopSection={this.props.addTopSection} /> );
    }
}

FooterContainer.propTypes = {
    addTopSection: PropTypes.bool.isRequired
};

FooterContainer.defaultProps = {
    addTopSection: false
};

export default connect()(FooterContainer)