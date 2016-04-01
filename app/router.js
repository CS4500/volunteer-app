import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'views/App'
import ProfileView from 'views/profile/ProfileView'
import HomeView from 'views/home/HomeView'
import SearchView from 'views/search/SearchView'
import LoginView from 'views/login/loginView'
import RegisterView from 'views/register/RegisterView'
import ExternalOrganizationView from 'views/organization/External_Profile_View'
import InternalOrganizationView from 'views/organization/Internal_Profile_View'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="profile" component={ProfileView}/>
        <Route path="search" component={SearchView}/>
        <Route path="login" component={LoginView}/>
        <Route path="register" component={RegisterView}/>
        <Route path="externalOrg" component={ExternalOrganizationView}/>
        <Route path="internalOrg" component={InternalOrganizationView}/>
    </Route>
)


export default routes;
