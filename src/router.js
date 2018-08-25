import React from 'react';
import UniversalRouter from 'universal-router';
import generateUrls from 'universal-router/generateUrls';
import createBrowserHistory from 'history/createBrowserHistory';

import Main from 'ui/apps/Main';
import Login from 'ui/apps/Login';

const history = createBrowserHistory();
let callback = () => { };

const routes = [
  {
    path: '',
    name: 'home',
    action: () => <Main key="main" />
  },
  {
    path: '/login',
    name: 'login',
    action: () => <Login key="login" />
  },
  {
    path: '/logout',
    name: 'logout',
    action: () => {
      localStorage.removeItem('accessToken');
      // eslint-disable-next-line no-use-before-define
      history.replace(url('login'));
    }
  }
];

const router = new UniversalRouter(routes);
const url = generateUrls(router);

let currentLocation = history.location;

function onLocationChange(location) {
  currentLocation = location;
  router.resolve({ pathname: location.pathname }).then((route) => {
    callback(route);
  });
}

history.listen(onLocationChange);

export {
  history,
  url
};


export default function(fn) {
  onLocationChange(currentLocation);
  callback = fn;
}
