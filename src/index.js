import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{FireContext} from'./FirebseContext/Context'
import firebase from './Firebase/Config'
ReactDOM.render(
    <FireContext.Provider value={{firebase}}>
<App />
</FireContext.Provider>
, document.getElementById('root'));
