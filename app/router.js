import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import App from 'views/App'
import ProfileView from 'views/profile/ProfileView'
import ProfileAdminView from 'views/profileadmin/ProfileAdminView'
import HomeView from 'views/home/HomeView'
import SearchView from 'views/search/SearchView'
import LoginView from 'views/login/loginView'
import RegisterView from 'views/register/RegisterView'
import ApprovalView from 'views/approval/ApprovalView'

// Authentication Wrappers
// in the future these may need to be nested, and we may want to provide
// additional functionality when a user is redirected (errors, etc)
const isAuthUser = UserAuthWrapper({
  authSelector: state => state.auth,
  failureRedirectPath: '/',
  wrapperDisplayName: 'IsAuthUser',
  predicate: auth =>  auth.isAuthenticated & auth.role === 'user'
})

const isAuthOrg = UserAuthWrapper({
  authSelector: state => state.auth,
  failureRedirectPath: '/',
  wrapperDisplayName: 'IsAuthOrg',
  predicate: auth => auth.isAuthenticated & auth.role === 'org'
})

const isAuthAdmin = UserAuthWrapper({
  authSelector: state => state.auth,
  failureRedirectPath: '/',
  wrapperDisplayName: 'IsAuthAdmin',
  predicate: auth => auth.isAuthenticated & auth.role === 'admin'
})

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="profile" component={isAuthUser(ProfileView)}/>
        <Route path="profileadmin" component={isAuthAdmin(ProfileAdminView)}/>
        <Route path="search" component={SearchView}/>
        <Route path="login" component={LoginView}/>
        <Route path="register" component={RegisterView}/>
        <Route path="approval" component={ApprovalView}/>
    </Route>
)

export default routes;
