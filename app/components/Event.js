import React, { Component } from 'react';
import styles from './event.scss';
var EventPanel = require('./Panel.jsx')
require('bootstrap/dist/css/bootstrap.css') ;

 class EventList extends Component {
  render() {
    return (
		<div>
	   <EventPanel />
		</div>

   );
   }
}

export default EventList
