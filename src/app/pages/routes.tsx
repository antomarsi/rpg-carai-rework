import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import { Home } from './Home/Home';
import Layout from '../components/Layout/Layout';
import Splash from './Splash/Splash';
import Editor from './Editor/Editor';

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/browser' component={Home} />
          <Route path='/editor' component={Editor} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default Routes;
