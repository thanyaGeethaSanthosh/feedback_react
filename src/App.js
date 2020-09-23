import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import SelfProfile from './components/Pages/SelfProfile';
import UserProfile from './components/Pages/UserProfile';
import FetchAPI from './Handlers/FetchAPI';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          restricted={false}
          component={SelfProfile}
          path='/'
          fetchAPI={FetchAPI}
          exact
        />
        <PrivateRoute
          component={UserProfile}
          path='/user/:userName'
          fetchAPI={FetchAPI}
          exact
        />
        <PublicRoute
          restricted={false}
          component={Login}
          path='/Login'
          fetchAPI={FetchAPI}
          exact
        />
        <PublicRoute
          restricted={false}
          component={SignUp}
          path='/signUp'
          fetchAPI={FetchAPI}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
