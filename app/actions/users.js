import { CALL_API, GET, POST } from '../middleware/api'

//action types
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export function fetchUsers() {
  return {
    [CALL_API]: {
      types: [ FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE ],
      endpoint: `users`,
      method: GET
    }
  }
}

export function fetchUser(id) {
  return {
    [CALL_API]: {
      types: [ FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE ],
      endpoint: `users/${id}`,
      method: GET
    }
  }
}
