import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import SelfProfile from './Pages/SelfProfile';
import UserProfile from './Pages/UserProfile';
import FetchAPI from './Handlers/FetchAPI';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
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
