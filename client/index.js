import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; /* binding between React and Redux */


// Import Components
import App from './components/App';

import store from './store';


const provider = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(provider, document.querySelector('#root'))