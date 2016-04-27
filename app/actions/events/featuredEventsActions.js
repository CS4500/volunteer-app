import { CALL_API, GET, POST } from '../../middleware/api'

/*
 *  FEATURED EVENT ACTIONS
 *  Handles all featured event actions
 *
 */

//action types
export const FETCH_FEATURED_EVENTS_REQUEST = 'FETCH_FEATURED_EVENTS_REQUEST';
export const FETCH_FEATURED_EVENTS_SUCCESS = 'FETCH_FEATURED_EVENTS_SUCCESS';
export const FETCH_FEATURED_EVENTS_FAILURE = 'FETCH_FEATURED_EVENTS_FAILURE';
export const RESET_FEATURED_EVENTS = 'RESET_FEATURED_EVENTS';


export function resetFeaturedEvents() {
    return {
        type: RESET_FEATURED_EVENTS
    }
}

export function fetchFeaturedEvents() {
    return {
        [CALL_API]: {
            types: [ FETCH_FEATURED_EVENTS_REQUEST, FETCH_FEATURED_EVENTS_SUCCESS, FETCH_FEATURED_EVENTS_FAILURE ],
            endpoint: `event/featured`,
            method: GET
        }
    }
}

