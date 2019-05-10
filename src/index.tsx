import React from 'react';
import ReactDom from 'react-dom';
import Root from './router';

ReactDom.render(
  <Root />,
  document.getElementById('root'),
);

declare const module: any;
if (module.hot) {
  module.hot.accept();
}
