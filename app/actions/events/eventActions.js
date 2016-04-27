import { CALL_API, GET, POST } from '../../middleware/api'
/*
*  EVENT ACTIONS
*  Handles all singular event actions
*  E.x. signing up for an event, or getting data for one event
*
 */

//action types
export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';

export const SIGNUP_FOR_EVENT_REQUEST = 'SIGNUP_FOR_EVENT_REQUEST';
export const SIGNUP_FOR_EVENT_SUCCESS = 'SIGNUP_FOR_EVENT_SUCCESS';
export const SIGNUP_FOR_EVENT_FAILIURE = 'SIGNUP_FOR_EVENT_FAILURE';

export const UNSIGNUP_FOR_EVENT_REQUEST = 'UNSIGNUP_FOR_EVENT_REQUEST';
export const UNSIGNUP_FOR_EVENT_SUCCESS = 'UNSIGNUP_FOR_EVENT_SUCCESS';
export const UNSIGNUP_FOR_EVENT_FAILIURE = 'UNSIGNUP_FOR_EVENT_FAILURE';

export const RESET_EVENT = 'RESET_EVENT';

export function reset() {
    return {
        type: RESET_EVENT
    }
}

export function fetchEvent(id) {
    return {
        [CALL_API]: {
            types: [ FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE ],
            endpoint: `event/${id}`,
            method: GET
        }
    }
}

export function signUpForEvent(data) {
    return {
        [CALL_API]: {
            types: [ SIGNUP_FOR_EVENT_REQUEST, SIGNUP_FOR_EVENT_SUCCESS, SIGNUP_FOR_EVENT_FAILIURE ],
            endpoint: `event/signup`,
            method: POST,
            data: data
        }
    }
}

export function unsignUpForEvent(data) {
    return {
        [CALL_API]: {
            types: [ UNSIGNUP_FOR_EVENT_REQUEST, UNSIGNUP_FOR_EVENT_SUCCESS, UNSIGNUP_FOR_EVENT_FAILIURE ],
            endpoint: `event/unsignup`,
            method: POST,
            data: data
        }
    }
}

