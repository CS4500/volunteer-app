import { CALL_API, GET, POST } from '../middleware/api'

export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PASSWORDVERIFY = 'SET_PASSWORDVERIFY'
export const SET_ERROR = 'SET_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'
export const RESET = 'RESET'
export const SAVE_USER_REQUEST = 'SAVE_USER_REQUEST'
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS'
export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE'


export const setEmail = (email) => (
  { type: SET_EMAIL,
    email: email }
)

export const setPassword = (password) => (
    { type: SET_PASSWORD,
      password: password }
)

export const setPasswordVerify = (passwordVerify) => (
    { type: SET_PASSWORDVERIFY,
      passwordVerify: passwordVerify }
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
      types: [ SAVE_USER_REQUEST, SAVE_USER_SUCCESS, SAVE_USER_FAILURE ],
      endpoint: `users`,
      method: POST,
      data: data
    }
  }
)
