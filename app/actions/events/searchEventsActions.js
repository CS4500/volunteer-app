import { CALL_API, GET, POST } from '../../middleware/api'

/*
 *  SEARCH EVENT ACTIONS
 *  Handles all search event actions
 *  sets search params (category + neighborhood)
 *
 */

//action types
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const RESET_SEARCH_EVENTS = 'RESET_SEARCH_EVENTS';

export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_NEIGHBORHOOD = 'SET_NEIGHBORHOOD';


export function resetSearchEvents() {
    return {
        type: RESET_SEARCH_EVENTS
    }
}

export const setCategory = (category) => {
    if (category.length == 0){
        category = null;
    }
    return ({
        type: SET_CATEGORY,
        category: category
    })
};

export const setNeighborhood = (neighborhood) => {
    if (neighborhood.length == 0){
        neighborhood = null;
    }
    return ({
        type: SET_NEIGHBORHOOD,
        neighborhood: neighborhood
    })
};

export function fetchSearchEvents() {
    return {
        [CALL_API]: {
            types: [ FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE ],
            endpoint: `event/get_all`,
            method: GET
        }
    }
}
