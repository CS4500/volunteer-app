import { connect } from 'react-redux'
import FeaturedEventsTable from "../components/FeaturedEventsTable/FeaturedEventsTable";

function mapStateToProps(state) {
    return {
        events: state.events.featuredEvents }
}

export default connect(mapStateToProps)(FeaturedEventsTable)