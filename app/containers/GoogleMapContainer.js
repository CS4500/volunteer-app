import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import GoogleMapMessage from '../components/GoogleMap/GoogleMapMessage'
var geocoder = new google.maps.Geocoder();

// Takes in an address city and state
// Pulls the lat and long coordinates and displays a google
// map with a marker on the coordinates
class GoogleMapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: <GoogleMapMessage message={"Waiting for Map View"}/>
        };
    }

    componentDidMount() {
        this.updateMap(this.props.address, this.props.city, this.props.state);
    }

    // Sometimes the props are empty the first time this component is called
    componentWillReceiveProps(nextProps){
        this.updateMap(nextProps.address , nextProps.city, nextProps.state);
    }

    updateMap(address, city, state){
        geocoder.geocode({"address": address + " " + city + " " + state}, function(results) {
            if (results[0]) {
                this.setState({
                    display: <GoogleMap
                        lat={results[0].geometry.location.lat()}
                        lng={results[0].geometry.location.lng()}/>
                });
            } else {
                this.setState({
                    display: <GoogleMapMessage message={"No Available Map View"}/>
                });
            }
        }.bind(this));
    }

    render() {
        return (this.state.display)
    }
}

GoogleMapContainer.propTypes = {
    address: PropTypes.string.isRequired,
    city: PropTypes.string,
    state: PropTypes.string
};

GoogleMapContainer.defaultProps = {
    address: "",
    city: "",
    state: ""
};

export default connect()(GoogleMapContainer)
