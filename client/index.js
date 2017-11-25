import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; /* binding between React and Redux */


// Import Components
import App from './components/App';

import store from './store';

// ES7 map.prototype.tojson polyfill
import tojson from 'map.prototype.tojson';


const provider = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(provider, document.querySelector('#root'))