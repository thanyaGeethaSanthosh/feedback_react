import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './componentStyles.css';
import * as serviceWorker from './serviceWorker';
import FeedBackForm from './components/FeedBackForm';
import SideBar from './components/sideBar';

ReactDOM.render(
  <React.StrictMode>
    <FeedBackForm onSubmit={() => {}} />
    <SideBar
      profileImage={'logo.png'}
      userID={'@thani'}
      fullName={'Thanya Geetha santhosh'}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
