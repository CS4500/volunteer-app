import { CALL_API, GET, POST } from '../middleware/api'

//action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const LOGOUT = 'LOGOUT'

export const loginRequest = (data) => (
    {[CALL_API]: {
      types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
      endpoint: `login`,
      method: POST,
      data: data
    }}
)

export const logout = () => ({type: LOGOUT})

export const setEmail = (email) => ({type: SET_EMAIL, email: email})

export const setPassword = (password) => ({type: SET_PASSWORD, password: password})
