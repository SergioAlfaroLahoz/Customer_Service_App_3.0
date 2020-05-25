import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom';

import './css/index.css';

import AppEN from './AppEN';
import AppFR from './AppFR';
import Language from './Language';
import Version from './components/EN/Version';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Language/>
        </Route>
        <Route path="/EN">
          <AppEN/>
        </Route>
        <Route path="/FR">
          <AppFR/>
        </Route>
      </Switch>
      <Version/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
