//Will be a view wrapper if any compents which are the same through out the application.
import React, { Component } from 'react';
import {Link} from 'react-router'

// The parent component
// All the views get rendered as this.props.children
class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App
