import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesSeach from './Search/Search';
import PagesForm from './Form/Form';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagesForm} />
        <Route path="/" component={PagesSeach} />
      </Switch>
    </Router>
  );
};

export default Root;
