import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal([`
  body {
    margin: 0;
    padding: 0;
    background-color: #e8f5fb;
    font-family: sans-serif;
    font-size: 16px;
  }
`]);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
