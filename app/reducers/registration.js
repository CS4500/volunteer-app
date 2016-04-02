import merge from 'lodash/merge'
import { SET_EMAIL,
         SET_PASSWORD,
         SET_PASSWORDVERIFY,
         SET_ERROR,
         REMOVE_ERROR,
         RESET,
         SAVE_USER_REQUEST,
         SAVE_USER_SUCCESS,
         SAVE_USER_FAILURE
       } from '../actions/registration'

const emptyState = { user: { email: null,
                            password: null,
                            passwordVerify: null,
                            gender: null,
                            age: null,
                            location: null,
                            skills: [],
                            interests: [],
                            bio: null,
                            contact: true },
                    error: null,
                    isSaving: false,
                    success: false}

export default (state = emptyState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return merge({}, state, {user: {email: action.email}})
    case SET_PASSWORD:
      return merge({}, state, {user: {password: action.password}})
    case SET_PASSWORDVERIFY:
      return merge({}, state, {user: {passwordVerify: action.passwordVerify}})
    case SET_ERROR:
      return merge({}, state, {error: action.error})
    case REMOVE_ERROR:
      return merge({}, state, {error: null})
    case RESET:
      return merge({}, emptyState)
    case SAVE_USER_REQUEST:
      return merge({}, state, {isSaving: true})
    case SAVE_USER_SUCCESS:
      return merge({}, state, {isSaving: false, success: true})
    case SAVE_USER_FAILURE:
      return merge({}, state, {isSaving: false, error: "Failed to complete registration"})
    default:
      return state
  }
}
