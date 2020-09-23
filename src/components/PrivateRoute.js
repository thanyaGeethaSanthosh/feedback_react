import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SideBar from './sideBar';
// import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, fetchAPI, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    //   <Route
    //     {...rest}
    //     render={(props) =>
    //       isLogin() ? <Component {...props} /> : <Redirect to='/signin' />
    //     }
    //   />
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

export default PrivateRoute;
