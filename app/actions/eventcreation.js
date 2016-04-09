import { CALL_API, GET, POST } from '../middleware/api'

export const SET_NAME = 'SET_NAME'
export const SET_ADDRESS= 'SET_ADDRESS'
export const SET_ZIPCODE = 'SET_ZIPCODE'
export const SET_MANAGER = 'SET_MANAGER'
export const SET_DATE = 'SET_DATE'
export const SET_ERROR = 'SET_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'
export const RESET = 'RESET'
export const SAVE_EVENT_REQUEST = 'SAVE_EVENT_REQUEST'
export const SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS'
export const SAVE_EVENT_FAILURE = 'SAVE_EVENT_FAILURE'


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

export const setDate = (date) => (
{ type: SET_DATE,
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

export const saveUser = (data) => (
{
    [CALL_API]: {
        types: [ SAVE_EVENT_REQUEST, SAVE_EVENT_SUCCESS, SAVE_EVENT_FAILURE ],
        endpoint: `events`,
        method: POST,
        data: data
    }
}
)
