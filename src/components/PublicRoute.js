import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, fetchAPI, ...rest }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const isLogged = () => {
    fetchAPI.getLoggedUser().then(({ loggedIn }) => {
      setLoggedIn(loggedIn);
      setLoaded(true);
    });
  };

  useEffect(isLogged, []);

  if (loaded) {
    return (
      <Route
        {...rest}
        render={(props) =>
          loggedIn ? (
            <Redirect to='/' />
          ) : (
            <div>
              <Component {...{ fetchAPI, ...props }} />
            </div>
          )
        }
      />
    );
  }
  return <div>Loading</div>;
};

export default PublicRoute;
