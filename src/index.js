import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{FireContext} from'./FirebseContext/Context'
import Context from './FirebseContext/Context'
import firebase from './Firebase/Config'
ReactDOM.render(
    <FireContext.Provider value={{firebase}}>
        <Context>
        <App/>
        </Context>
        </FireContext.Provider>
, document.getElementById('root'));
