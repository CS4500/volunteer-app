import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import App from 'views/App'
import ProfileView from 'views/profile/ProfileView'
import HomeView from 'views/home/HomeView'
import SearchView from 'views/search/SearchView'
import HoursView from 'views/hours/HoursView'
import LoginView from 'views/login/LoginView'
import RegisterView from 'views/register/RegisterView'
import FaqView from 'views/faq/FaqView'
import ApprovalView from 'views/approval/ApprovalView'
import EventDetailsView from 'views/eventDetails/EventDetailsView'
import OrganizationView from 'views/organization/OrganizationView'

// Authentication Wrappers
// in the future these may need to be nested, and we may want to provide
// additional functionality when a user is redirected (errors, etc)
const isAuth = UserAuthWrapper({
  authSelector: state => state.auth,
  failureRedirectPath: '/',
  wrapperDisplayName: 'IsAuth',
  predicate: auth =>  auth.isAuthenticated & (auth.role === 'volunteer' || auth.role === 'organization')
})

const isAuthAdmin = UserAuthWrapper({
  authSelector: state => state.auth,
  failureRedirectPath: '/',
  wrapperDisplayName: 'IsAuthAdmin',
  predicate: auth => auth.isAuthenticated & auth.role === 'admin'
})

// All of these point to views.
// Wrap component with auth check if a user
// must be signed in to view a certain page
// Adding an id in the path makes that id accessible in the view via this.params.<id>
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="profile" component={isAuth(ProfileView)}/>
        <Route path="hours" component={HoursView}/>
        <Route path="search" component={SearchView}/>
        <Route path="login" component={LoginView}/>
        <Route path="register" component={RegisterView}/>
        <Route path="faq" component={FaqView}/>
        <Route path="approval" component={ApprovalView}/>
        <Route path="event/:eventId" component={EventDetailsView}/>
        <Route path="organization/:orgId" component={OrganizationView}/>
    </Route>
);

export default routes;