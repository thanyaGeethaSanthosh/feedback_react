import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SideBar from './sideBar';
// import { isLogin } from '../utils';

const PublicRoute = ({
  component: Component,
  restricted,
  fetchAPI,
  ...rest
}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isLogin() && restricted ? (
    //       <Redirect to='/dashboard' />
    //     ) : (
    //       <Component {...props} />
    //     )
    //   }
    // />
    <Route
      {...rest}
      render={(props) => (
        <div>
          <Component {...{ fetchAPI, ...props }} />
          <SideBar fetchAPI={fetchAPI} />
        </div>
      )}
    />
  );
};

export default PublicRoute;
