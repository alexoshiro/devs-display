import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Dashboard from './pages/Dashboard';
import DevEdit from './pages/DevEdit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/editar/:username" component={DevEdit} />
      </Switch>
    </BrowserRouter>
  )
}