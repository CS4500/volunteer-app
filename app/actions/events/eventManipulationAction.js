import { CALL_API, GET, POST } from '../../middleware/api'

/*
 *  EVENT MANIPULATION ACTIONS
 *  Handles event creation and editing
 *  updateEvent() and saveEvent()
 */

export const SET_NAME = 'SET_NAME';
export const SET_ADDRESS= 'SET_ADDRESS';
export const SET_ZIPCODE = 'SET_ZIPCODE';
export const SET_MANAGER = 'SET_MANAGER';
export const SET_MONTH  = 'SET_MONTH';
export const SET_DAY  = 'SET_DAY';
export const SET_YEAR = 'SET_YEAR';
export const SET_CAP = 'SET_CAP';
export const SET_DESCRIPTION= 'SET_DESCRIPTION';
export const SET_ERROR = 'SET_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';
export const RESET = 'RESET';
export const SAVE_EVENT_REQUEST = 'SAVE_EVENT_REQUEST';
export const SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS';
export const SAVE_EVENT_FAILURE = 'SAVE_EVENT_FAILURE';
export const SHOW_EVENT_CREATION_MODAL = 'SHOW_EVENT_CREATION_MODAL';
export const HIDE_EVENT_CREATION_MODAL = 'HIDE_EVENT_CREATION_MODAL';

export const openModal = () => (
{ type: SHOW_EVENT_CREATION_MODAL }
);

export const closeModal = () => (
{ type: HIDE_EVENT_CREATION_MODAL }
);

export const setName = (name) => (
{ type: SET_NAME,
    name: name }
)

export const setAddress = (address) => (
{ type: SET_ADDRESS,
    address: address }
)

export const setZipcode = (zipcode) => (
{ type: SET_ZIPCODE,
    zipcode: zipcode }
)

export const setMonth = (month) => (
{ type: SET_MONTH,
    date: date }
)
export const setDay = (day) => (
{ type: SET_DAY,
    date: date }
)
export const setYear = (year) => (
{ type: SET_YEAR,
    date: date }
)
export const setCap = (cap) => (
{ type: SET_CAP,
    date: date }
)
export const setDescription = (description) => (
{ type: SET_DESCRIPTION,
    date: date }
)


export const setManager = (manager) => (
{ type: SET_MANAGER,
    manager: manager }
)

export const setError = (error) => (
{ type: SET_ERROR,
    error: error }
)

export const removeError = () => (
{ type: REMOVE_ERROR }
)

export const reset = () => (
{ type: RESET }
)

export const saveEvent = (eventData) => {

    let error = checkData(eventData);
    if (error) {
        return ({
            type: SET_ERROR,
            error: error
        })
    } else {
        return ({
            [CALL_API]: {
                types: [SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE],
                endpoint: `event`,
                method: POST,
                data: eventData
            }
        })
    }
};

export const updateEvent = (eventData) => {
    let error = checkData(eventData);

    if (error) {
        return ({
            type: SET_UPDATE_ERROR,
            error: error
        })
    } else {

        return ({
            [CALL_API]: {
                types: [SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE],
                endpoint: `event/update`, //TODO FAKE ENDPOINT
                method: PUT,
                data: eventData
            }
        })
    }
};

// Check data to see if all required fields are present
const checkData = (eventData) => {

    if (eventData.name) {
        if (!eventData.name.valid) {
            return eventData.name.error;
        }
    }
    else if (eventData.address) {
        if (!eventData.address.valid) {
            return eventData.address.error;
        }
    }
    else if (eventData.zipcode) {
        if (!eventData.zipcode.valid) {
            return eventData.xipcode.error;
        }
    }
    else if (eventData.manager) {
        if (!eventData.manager.valid) {
            return eventData.manager.error;
        }
    }
    else if (eventData.description) {
        if (!eventData.description.valid) {
            return eventData.description.error;
        }
    }
    else {
        return null;
    }
};