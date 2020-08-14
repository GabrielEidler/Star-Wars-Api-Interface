import React from 'react';
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Provider } from 'react-redux';
import { Store } from './store';

//custom imports
import App from './App'


ReactDOM.render( 
<Provider store={Store}>
    <App/>
</Provider>
, document.getElementById('root'));