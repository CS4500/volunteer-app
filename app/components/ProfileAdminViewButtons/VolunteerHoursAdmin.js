import React from 'react'
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'

 const VolunteersHoursAdmin = (props) => (
  <p> 
    {genHours(props.filter)}
  </p>
      
)

const genHours = (filter) => (
  <div>
    <h3>{filter} : </h3>
    <h3>add a filtering function here</h3>
  </div>
)

export default VolunteersHoursAdmin
