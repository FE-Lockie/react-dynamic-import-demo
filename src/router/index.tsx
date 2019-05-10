import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import config from './config';

export default function Root() {
  return (
    <HashRouter>
      <Switch>
        {config.map((item, index) => (
          <Route key={item.path || index} {...item} />
        ))}
      </Switch>
    </HashRouter>
  )
}
