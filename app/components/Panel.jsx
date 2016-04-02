  import React from 'react';
  import ReactDOM from 'react-dom';
  import {Panel, Table, Accordion} from 'react-bootstrap';
  var LogHoursButton = require('./Button.jsx')

  var EventTable = React.createClass({ 
  	render: function(){ 

     return(

      <Table fill responsive bordered={false}>
      <tbody>
      <tr>
      <td> Organization Name </td> 
      </tr> 
      <tr> 
      <td> Time Commitment </td> 
      </tr> 
      <tr> 
      <td> Details </td> 
      </tr> 
      </tbody> 
      </Table>

      );

   }

 });


  var EventPanel = React.createClass({
    render: function(){ 

      return (

       <div>

        <div className="panel panel-primary">

        <div className="panel-heading">
        <div className="panel-title pull-left">
        <h2>Event Name </h2>
        </div>	
        <div className='btn-toolbar pull-right'>
        <LogHoursButton />
        </div>
        <div className='clearfix'> </div>
        </div>


        <div className="panel-body">
        <EventTable />
        </div>
        </div>
        </div>
        
        );
      }
    });

    var ColEvent = React.createClass({
    render: function(){ 

      return ( 
      <div> 
      <Panel collapsible header="Event #1" eventKey="2" bsStyle="primary">
      <EventTable /> 
    </Panel>
      <Panel collapsible header="Event #2" eventKey="2" bsStyle="primary">
      <EventTable /> 
    </Panel>
    </div>

    )
  }
});
    var EventAccord = React.createClass({
    render: function(){ 

      return (
  <Accordion>
    <ColEvent />
  </Accordion>
);
}
});


module.exports = {
    EventPanel,
    EventAccord
}
