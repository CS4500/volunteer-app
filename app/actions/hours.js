import { CALL_API, GET, POST } from '../middleware/api'

/*
 *  HOURS ACTIONS
 *  Handles all hour logging for events
 *
 */

//action types
export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const LOG_HOURS_REQUEST = 'LOG_HOURS_REQUEST';
export const LOG_HOURS_SUCCESS = 'LOG_HOURS_SUCCESS';
export const LOG_HOURS_FAILURE = 'LOG_HOURS_FAILURE';

export const setStartTime = (time) => {
    // TODO: error checking
    return ({
        type: SET_START_TIME,
        start: {value: time, valid: true, error: null}
    })
};

export const setEndTime = (time) => {
    // TODO: error checking
    return ({
        type: SET_END_TIME,
        end: {value: time, valid: true, error: null}
    })
};


export const logHours = (data) => {
    return {
        [CALL_API]: {
            types: [ LOG_HOURS_REQUEST, LOG_HOURS_SUCCESS, LOG_HOURS_FAILURE ],
            endpoint: `hours`,
            method: POST,
            data: data
        }
    }
};