  import React from 'react';
  import ReactDOM from 'react-dom';
  import {Panel, Table} from 'react-bootstrap';
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
        <div class="row">
        <div className="col-sm-2 col-xs-12" id="lefttoc"></div>
        <div className="col-sm-7 col-xs-12" id="maptoc">
        <div className="row">
        <div className="col-lg-10 col-md-11 col-sm-2 col-xs-12">
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
        <div class="col-sm-3 col-xs-12" id="righttoc"></div>  
        </div>
        </div>
        </div>

        );
      }
    });
    module.exports = EventPanel; 
