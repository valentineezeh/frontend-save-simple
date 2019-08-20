import React from 'react';
import ReactDOM from 'react-dom';
import 'toastr/build/toastr.css';
import '../node_modules/alertifyjs/build/css/alertify.css';
import '../node_modules/alertifyjs/build/alertify';
import { Provider } from 'react-redux';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import App from './components/App';
import { BrowserRouter } from  'react-router-dom';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { LoginCurrentUser } from './actions/auth.actions/user.login.action';
import { setCurrentUser } from './actions/auth.actions/signup.action';
import store from './store/index'
import './template/css/main.css'
import './template/css/res.css';
import './template/css/animation.css'
import './template/js/main';

const token = Cookie.get('jwtToken')
const actionType = Cookie.get('action')



if (token) {
  const user = jwt.decode(token)
  if (actionType === 'login') {
    store.dispatch(LoginCurrentUser(user));
    setAuthorizationToken(token);
  } else {
    store.dispatch(setCurrentUser(user));
    setAuthorizationToken(token);
  }
  
  
}



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

