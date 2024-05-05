import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Buffer } from 'buffer'; // Import Buffer from the buffer package
import App from './App'; // Import App component
import store from './reduxstore/store';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';


// Set Buffer as a global variable
global.Buffer = Buffer;


const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

console.log(auth0Domain, auth0ClientId);

ReactDOM.render(
  <Provider store={store}>

    <React.StrictMode>
      <Auth0Provider
        domain="dev-0fbjl0jgnpi7yunn.us.auth0.com"
        clientId="PJ8S3rRfSLWokYU8LworWWcKQnKId8J2"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
