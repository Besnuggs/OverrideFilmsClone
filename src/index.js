import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './main.css'
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {unregister} from './registerServiceWorker';
import store from './ducks/store'

ReactDOM.render(
<Provider store={store}>
<HashRouter>
<App />
</HashRouter>
</Provider>
, document.getElementById('root'));
unregister();
