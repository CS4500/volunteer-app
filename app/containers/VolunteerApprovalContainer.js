import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import VolunteerApproval from "../components/VolunteerApproval/VolunteerApproval";
import RequestingAttend from '../components/VolunteerApproval/RequestingAttend';

// Container to wrap the Volunteer Approval component
class VolunteerApprovalContainer extends Component {

   componentDidMount() {
	   this.props.dispatch(
		   fetchUsers()
	   );
   }

	confirmUser(index) {
		console.log("Confirmed user at index: " + index);
	}

  	render() {
		var attendComponents = [];
		for (var x in this.props.users) {
			attendComponents.push(
				<RequestingAttend confirmUser={this.confirmUser.bind(this, x)} user={this.props.users[x]}/>
			)
		}
    	return (
    		<VolunteerApproval 
    		event={{"name": "Event name"}}
    		volunteers={attendComponents} />
		)
  	}
}

VolunteerApprovalContainer.propTypes = {
	users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		//maybe change to user.items
		users: state.users.users }
}

export default connect(mapStateToProps)(VolunteerApprovalContainer)
