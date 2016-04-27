import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Col, Row, Grid } from 'react-bootstrap'
import {
    fetchSearchEvents,
    resetSearchEvents,
    setCategory,
    setNeighborhood } from "../actions/events/searchEventsActions";
import { push as pushRoute } from 'react-router-redux';
import EventSearchForm from '../components/EventSearchForm/EventSearchForm'
import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch'
import EventSearchResults from '../components/EventSearchResults/EventSearchResults'

// Event search container. If it is the home page, route to the search page instead of showing search results
// TODO Currently not using the advanced search component
class EventSearchContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            advancedSearch : false
        };
    }

    componentDidMount() {
        if (this.props.events.length > 0){
            this.props.fetchSearchEvents();
        }
    }

    componentWillUnmount(){
        if (!this.props.homePage) {
            this.props.resetSearchEvents();
        }
    }

    searchForEvents() {
        this.props.fetchSearchEvents();
        if (this.props.homePage) {
            this.props.pushRoute("/search");
        }
    }

    onAdvancedClick() {
        if(!this.state.advancedSearch) {
            this.setState({ advancedSearch: true});
        }
        else {
            this.setState({ advancedSearch: false});
        }
    }

    categoryChange(e) {
        this.props.setCategory(e.target.value);
    }

    neighborhoodChange(e){
        this.props.setNeighborhood(e.target.value);
    }

    render() {
        return (
            <Row style={{width: "100%", margin: "0"}}>
                    <Col xs={10} xsOffset={1}>
                        <div>
                            <EventSearchForm category={this.props.category}
                                             neighborhood={this.props.neighborhood}
                                             categoryChange={this.categoryChange.bind(this)}
                                             neighborhoodChange={this.neighborhoodChange.bind(this)}
                                             searchClick={this.searchForEvents.bind(this)}
                                             icon={this.props.icon}/>
                        </div>
                    </Col>
                {this.props.homePage ? null :
                    <Row style={{"width": "100%", "margin": "0"}}>
                        <EventSearchResults events={this.props.events}/>
                    </Row>
                }
            </Row>
        );
    }
}

EventSearchContainer.propTypes = {
    events: PropTypes.array.isRequired,
    category: PropTypes.string,
    neighborhood: PropTypes.string,
    homePage: PropTypes.bool,
    icon: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        fetchSearchEvents,
        resetSearchEvents,
        setCategory,
        setNeighborhood,
        pushRoute }, dispatch)
);

const mapStateToProps = (state) => (
    {
        events: state.searchEvents.events,
        category: state.searchEvents.category,
        neighborhood: state.searchEvents.neighborhood
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EventSearchContainer)