import merge from 'lodash/merge'
import extend from 'lodash/extend'
import { LOGIN_REQUEST,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
         SET_EMAIL,
         SET_PASSWORD,
         LOGOUT
        } from '../actions/auth'
import { UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_EMAIL,
    UPDATE_NAME,
    UPDATE_PHONE,
    UPDATE_BIO,
    CLEAR_UPDATE_FIELDS,
    REMOVE_UPDATE_ERROR,
    SET_UPDATE_ERROR } from '../actions/editUser'

// The default/initial empty state
const emptyState = { user: {
                        email: null,
                        password: null
                    },
                    update: {
                        error: null,
                        fields: {}
                    },
                    error: null,
                    isFetching: false,
                    isAuthenticated: false,
                    role: null,
                    token: null };

// These get triggered by the actions
// Merge the updated fields into the current state
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
      return merge({}, state, {user: action.response.user, isFetching: false, isAuthenticated: true, role: action.response.user.permissions, token: action.response.token}, {user: {password: null}})
    case LOGIN_FAILURE:
      // may want to just set failed flag and define error message else where
      // may want to pass up error from middleware action.response.error
      return merge({}, state, {error: "Login Failed", isFetching: false}, {user: {password: null}});
    case UPDATE_USER_REQUEST:
        return merge({}, state, {isFetching: true});
    case UPDATE_USER_SUCCESS:
        return merge({}, state, {isFetching: false, user: action.response.user});
    case UPDATE_USER_FAILURE:
        return merge({}, state, {isFetching: false, update: {error: "Failed to update profile info"}});
    case UPDATE_EMAIL:
        return merge({}, state, {update: {fields: {email: action.email}}});
    case UPDATE_NAME:
        return merge({}, state, {update: {fields: {name: action.name}}});
    case UPDATE_PHONE:
        return merge({}, state, {update: {fields: {phone: action.phone}}});
    case UPDATE_BIO:
        return merge({}, state, {update: {fields: {bio: action.bio}}});
    case CLEAR_UPDATE_FIELDS:
        return extend({}, state, {update: {fields: {}}});
    case REMOVE_UPDATE_ERROR:
        return merge({}, state, {update: {error: null}});
    case SET_UPDATE_ERROR:
        return merge({}, state, {update: {error: action.error}});
    case LOGOUT:
        return merge({}, emptyState);
    default:
      return state
  }
}
