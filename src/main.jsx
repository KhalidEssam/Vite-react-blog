import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-0fbjl0jgnpi7yunn.us.auth0.com"
    clientId="PJ8S3rRfSLWokYU8LworWWcKQnKId8J2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
