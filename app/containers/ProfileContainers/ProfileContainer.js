import React, { PropTypes, Component } from 'react'
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";
import UserProfileContainer from './Volunteer/UserProfileContainer'
import OrgProfileContainer from './Organization/OrgProfileContainer'
import { connect } from 'react-redux'

class ProfileContainer extends Component {

    componentDidMount() {
        //TODO maybe use this
    }

    render() {
        let content = null;

        if (this.props.permissions == "organization") {
            content = <OrgProfileContainer />;
        } else {
            content = <UserProfileContainer />;
        }
        return (content)
    }
}

ProfileContainer.propTypes = {
    permissions: PropTypes.string.isRequired
};

ProfileContainer.defaultProps = {
    permissions: "volunteer"
};

const mapStateToProps = (state) => (
{
    permissions: state.auth.user.permissions
}
);

export default connect(mapStateToProps)(ProfileContainer)
