import React, { Component } from 'react';

class ProfileChart extends Component {
    render() {
        var memberList = this.props.members.map(function(member, index){
            return <li key={ index }>{member}</li>;
        })
                    
        return  <ul>{ memberList }</ul>
    }
}

export default ProfileChart