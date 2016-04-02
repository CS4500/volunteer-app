import { combineReducers } from 'redux'
//move to top of the app
import { routerReducer as router } from 'react-router-redux'
import users from './users'
import events from './events'
import orgs from './orgs'
import registration from './registration'
import auth from './auth'

//add an error reducer as well with actions ADD_ERROR, REMOVE_ERROR

//combine all reducers in this folder here
export default combineReducers({
  router,
  users,
  events,
  orgs,
  registration,
  auth
})
