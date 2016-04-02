import merge from 'lodash/merge'
import { LOGIN_REQUEST,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         SET_EMAIL,
         SET_PASSWORD,
         LOGOUT
        } from '../actions/auth'

// Should the default empty state have a user with
// all null fields or user: null
// Better handle login state
const emptyState = { user: { email: null,
                            password: null,
                            gender: null,
                            age: null,
                            location: null,
                            skills: [],
                            interests: [],
                            bio: null,
                            contact: true },
                    error: null,
                    isFetching: false,
                    isAuthenticated: false,
                    role: null,
                    token: null }

export default (state = emptyState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return merge({}, state, {user: {email: action.email}})
    case SET_PASSWORD:
      return merge({}, state, {user: {password: action.password}})
    case LOGIN_REQUEST:
      return merge({}, state, {isFetching: true})
    case LOGIN_SUCCESS:
      // TODO ROLE should be returned from the server as well.
      return merge({}, state, {user: action.response.user, isFetching: false, isAuthenticated: true, token: action.response.token, role: action.response.role}, {user: {password: null}})
    case LOGIN_FAILURE:
      // may want to just set failed flag and define error message else where
      // may want to pass up error from middleware action.response.error
      return merge({}, state, {error: "Login Failed", isFetching: false}, {user: {password: null}})
    case LOGOUT:
      return merge({}, emptyState)
    default:
      return state
  }
}
