import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { currentUser } from './utils/localstorage';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage';
import LoginPage from './containers/LoginPage';
import StudentPage from './containers/StudentPage';
import 'sanitize.css/sanitize.css';

// Fonts
require('./index.css')
import styles from './index.css';
import FontFaceObserver from 'fontfaceobserver';
const openSansObserver = new FontFaceObserver('Open Sans');
const oswaldObserver = new FontFaceObserver('Oswald');

Promise.all([oswaldObserver.load(), openSansObserver.load()])
.then(() => {
  console.log('fonts loaded styles:');
  document.body.classList.add(styles.fontLoaded);
});

// Function that redirects to LoginPage if not logged
const redirectToLogin = (nextState, replace, callback) => {
  if (!currentUser()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
    callback();
  } else {
    callback();
  }
}

// Function that redirects LoginPage to dashboard if logged
const redirectToDashboard = (nextState, replace, callback) => {
    if (currentUser()) {
      console.log(currentUser());
      replace('/area-restrita');
      callback();
    } else {
      callback();
    }

}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute
        onEnter={redirectToDashboard}
        component={LoginPage}
      />
      <Route
        onEnter={redirectToLogin}
        path="/area-restrita"
        component={StudentPage}
      />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
