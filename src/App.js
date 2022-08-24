import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import './Pages/Signup'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
function App() {
  return (
    <div>
      <Router>
        <Route exact path={'/'}>
        <Home/>
        </Route>
        <Route path={'/signup'}>
        <Signup/>
        </Route>
        <Route  path={'/login'}>

          <Login/>

        </Route>
        </Router>
        
          
    </div>
  );
}

export default App;
