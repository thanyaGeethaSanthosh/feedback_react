import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SideBar from './sideBar';

const PrivateRoute = ({ component: Component, fetchAPI, ...rest }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const getUser = () => {
    fetchAPI.getUserData().then(({ user, loggedIn }) => {
      setUser(user);
      setLoggedIn(loggedIn);
      setLoaded(true);
    });
  };

  useEffect(getUser, []);

  if (loaded) {
    return (
      <Route
        {...rest}
        render={(props) =>
          loggedIn ? (
            <div>
              <Component {...{ fetchAPI, ...props }} />
              <SideBar user={user} />
            </div>
          ) : (
            <Redirect to='/login' />
          )
        }
      />
    );
  }
  return <div>Loading</div>;
};

export default PrivateRoute;
