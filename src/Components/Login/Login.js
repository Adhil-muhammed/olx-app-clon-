import React,{useState,useContext} from 'react';
import {FireContext} from '../../FirebseContext/Context'
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import 'firebase/auth';
import 'firebase/firestore'

function Login() {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('') 
  const [phone,setPhone]=useState('') 
  const{firebase}=useContext(FireContext)
  const history=useHistory()
  const EventHandler=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password)
  .then(() => {
   alert("logged")
  }).catch((error) => {
    alert(error.message)
  }).then(()=>{
    firebase.firestore().collection('loged').add({
      name:username
    })
  }).then(()=>{
    history.push('/')
  })

}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={EventHandler}>
        <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            id="fname"
            name="username"
            defaultValue="adhil"
          />
          <br/>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>{
              setPhone(e.target.value)
            }}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br/>
          <br/>
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
