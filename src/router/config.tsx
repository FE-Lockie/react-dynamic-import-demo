import React from 'react';
import { Redirect } from 'react-router-dom';
import asyncComponent from '../components/asyncComponent';

const routes = [{
  path: '/',
  exact: true,
  component: () => (<Redirect exact from={'/'} to={'/home'} />),
}, {
  path: '/home',
  exact: true,
  component: asyncComponent(() => import(/* webpackChunkName: 'home' */ '../containers/home')),
}, {
  path: '/home/sub',
  exact: true,
  component: asyncComponent(() => import(/* webpackChunkName: 'home' */ '../containers/home')),
}, {
  path: '/mine',
  exact: true,
  component: asyncComponent(() => import(/* webpackChunkName: 'mine' */ '../containers/mine')),
}];

export default routes;