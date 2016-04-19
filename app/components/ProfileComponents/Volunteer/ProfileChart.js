﻿/**
 * Created by Shiyu on 4/2/2016.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
var LineChart = require("react-chartjs").Line;
var PieChart = require("react-chartjs").Pie;

/* fake data
 var data = {
 labels: ["January", "February", "March", "April", "May", "June", "July"],
 datasets: [
 {
 label: "My First dataset",
 fillColor: "rgba(220,220,220,0.2)",
 strokeColor: "rgba(220,220,220,1)",
 pointColor: "rgba(220,220,220,1)",
 pointStrokeColor: "#fff",
 pointHighlightFill: "#fff",
 pointHighlightStroke: "rgba(220,220,220,1)",
 data: [65, 59, 80, 81, 56, 55, 40]
 },
 {
 label: "My Second dataset",
 fillColor: "rgba(151,187,205,0.2)",
 strokeColor: "rgba(151,187,205,1)",
 pointColor: "rgba(151,187,205,1)",
 pointStrokeColor: "#fff",
 pointHighlightFill: "#fff",
 pointHighlightStroke: "rgba(151,187,205,1)",
 data: [28, 48, 40, 19, 86, 27, 90]
 }
 ]
 };

 var data2 = [
 {
 value: 300,
 color:"#F7464A",
 highlight: "#FF5A5E",
 label: "Red"
 },
 {
 value: 50,
 color: "#46BFBD",
 highlight: "#5AD3D1",
 label: "Green"
 },
 {
 value: 100,
 color: "#FDB45C",
 highlight: "#FFC870",
 label: "Yellow"
 }
 ]*/

var options = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var options2 = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 0, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
<<<<<<< HEAD
=======

}
class ProfileChart extends Component {


    render() {
        return (
            <div>
                <div>
                    <PieChart data={data2} options={options2}/>
                    <LineChart data={data} options={options}/>
                </div>
               
            </div>
        );
    }
>>>>>>> 7839d798712dd85c5efa61ef66302d135983af58
}
// class ProfileChart extends Component {
//
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <PieChart data={data2} options={options2}/>
//                     <LineChart data={data} options={options}/>
//                 </div>
//
//             </div>
//         );
//     }
// }

const ProfileChart = (props) => (
    <div>
        <div>
            <PieChart data={props.data2} options={options2}/>
            <LineChart data={props.data} options={options}/>
        </div>
    </div>
);

export default ProfileChart