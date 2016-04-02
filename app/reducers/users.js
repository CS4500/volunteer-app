import merge from 'lodash/merge'
import { FETCH_USERS_REQUEST,
         FETCH_USERS_SUCCESS,
         FETCH_USERS_FAILURE,
         FETCH_USER_REQUEST,
         FETCH_USER_SUCCESS,
         FETCH_USER_FAILURE
       } from '../actions/users'

// this is a template, currently returns same state for for each action, will have
// to specify how each action modifies the app state, will also need to add
// addtional state

const emptyState = { isReq: false,
                     users: [],
                     currentUser: {}}

export default (state = emptyState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return merge({}, state, {isReq: true})
    case FETCH_USERS_SUCCESS:
      // a small example of just adding an array user names to the app state
      return merge({}, state, {isReq: false, users: action.response})
    case FETCH_USERS_FAILURE:
      return merge({}, state, {isReq: false})
    case FETCH_USER_REQUEST:
      return merge({}, state, {isReq: true})
    case FETCH_USER_SUCCESS:
      return merge({}, state, {isReq: false})
    case FETCH_USER_FAILURE:
      return merge({}, state, {isReq: false})
    default:
      return state
  }
}
