import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {FireContext} from '../../FirebseContext/Context'
import 'firebase/auth'
import 'firebase/firestore'
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [user,setUser]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FireContext)
  const history=useHistory()

  const handler=(e)=>{
    e.preventDefault()
    console.log(firebase)
    console.log(password)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:user}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:user,
          phonenumber:phone,
          password:password,
          powerdBy:"mr: adhil_muhammed"
        })
      }).then(()=>{
        console.log("chiken dinner.....")
      }).then(()=>{
        history.push("/login")
        

      })
    })
  }

 
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={user}
            onChange={(e)=>{
              setUser(e.target.value)
            }}
        
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
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
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
