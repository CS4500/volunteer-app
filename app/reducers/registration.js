import merge from 'lodash/merge'
import {
    SET_NAME,
    SET_EMAIL,
    SET_POC,
    SET_PASSWORD,
    SET_PASSWORDVERIFY,
    SET_PHONE,
    SET_GENDER,
    SET_BIRTHDATE,
    SET_ERROR,
    SET_LOCATION,
    SET_EDUCATION,
    SET_ADDRESS,
    SET_CITY,
    SET_STATE,
    SET_ZIP,
    SET_SKILLS,
    SET_INTERESTS,
    SET_BIO,
    SET_MISSION,
    SET_CONTACT,
    REMOVE_ERROR,
    RESET,
    SAVE_USER_REQUEST,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE
} from '../actions/registration'

const emptyState =
    {
        user: {
            name: {value: null, valid: false, error: "Enter a name"},
            email: {value: null, valid: false, error: "Enter an email"},
            password: {value: null, valid: false, error: "Enter a password"},
            passwordVerify: {value: null, valid: false, error: "Verify password"},
            phone: {value: null, valid: false, error: "Enter a phone number"},
            gender: {value: null, valid: true, error: null},
            birthdate: {value: null, valid: true, error: null},
            location: {value: null, valid: true, error: null},
            education: {value: null, valid: true, error: null},
            address: {value: null, valid: true, error: null},
            city: {value: null, valid: true, error: null},
            state: {value: "MA", valid: true, error: null},
            zip: {value: null, valid: true, error: null},
            skills: {value: [], valid: true, error: null},
            interests: {value: [], valid: true, error: null},
            bio: {value: null, valid: true, error: null},
            mission: {value: null, valid: true, error: null},
            poc: {value: null, valid: true, error: null},
            contact: {value: true, valid: true, error: null},
        },
        error: null,
        isSaving: false,
        success: false
    };

export default (state = emptyState, action) => {
  switch (action.type) {
    case SET_NAME:
      return merge({}, state, {user: {name: action.name}});
    case SET_EMAIL:
      return merge({}, state, {user: {email: action.email}});
    case SET_POC:
      return merge({}, state, {user: {poc: action.poc}});
    case SET_PASSWORD:
      return merge({}, state, {user: {password: action.password}});
    case SET_PASSWORDVERIFY:
      return merge({}, state, {user: {passwordVerify: action.passwordVerify}});
    case SET_PHONE:
      return merge({}, state, {user: {phone: action.phone}});
    case SET_GENDER:
      return merge({}, state, {user: {gender: action.gender}});
    case SET_BIRTHDATE:
      return merge({}, state, {user: {birthdate: action.birthdate}});
    case SET_LOCATION:
      return merge({}, state, {user: {location: action.location}});
    case SET_EDUCATION:
      return merge({}, state, {user: {education: action.education}});
    case SET_ADDRESS:
      return merge({}, state, {user: {address: action.address}});
    case SET_CITY:
      return merge({}, state, {user: {city: action.city}});
    case SET_STATE:
      return merge({}, state, {user: {state: action.state}});
    case SET_ZIP:
      return merge({}, state, {user: {zip: action.zip}});
    case SET_SKILLS:
      return merge({}, state, {user: {skills: action.skills}});
    case SET_INTERESTS:
      return merge({}, state, {user: {interests: action.interests}});
    case SET_BIO:
      return merge({}, state, {user: {bio: action.bio}});
    case SET_MISSION:
      return merge({}, state, {user: {mission: action.mission}});
    case SET_CONTACT:
      return merge({}, state, {user: {contact: action.contact}});
    case SET_ERROR:
      return merge({}, state, {error: action.error});
    case REMOVE_ERROR:
      return merge({}, state, {error: null});
    case RESET:
      return merge({}, emptyState);
    case SAVE_USER_REQUEST:
      return merge({}, state, {isSaving: true});
    case SAVE_USER_SUCCESS:
      return merge({}, state, {isSaving: false, success: true});
    case SAVE_USER_FAILURE:
      return merge({}, state, {isSaving: false, error: "Failed to complete registration"});
    default:
      return state
  }
}
