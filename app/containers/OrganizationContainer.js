import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchOrg } from '../actions/orgs'
import { push as pushRoute } from 'react-router-redux';
import About from '../components/Organization/About'
import Carousel from '../components/Organization/Carousel'

// Wrapper for the organization component
// What a volunteer sees when they view an org page
class OrganizationContainer extends Component {

    componentDidMount() {
        this.props.fetchOrg(this.props.orgId);

    }

    render() {
        return (
            <div>
                <Carousel images={[]}/>
                <About org={this.props.organization}/>
            </div>
        )
    }
}

OrganizationContainer.propTypes = {
    orgId: PropTypes.string,
    organization: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({fetchOrg, pushRoute}, dispatch)
);

const mapStateToProps = (state) => (
    {
        organization: state.orgs.organization
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationContainer)
