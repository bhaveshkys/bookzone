import './App.css';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth,storage } from './firebase';
import {  ref ,getDownloadURL } from "firebase/storage";
import Navbar from './components/navbar/Navbar';
import Feed from './pages/Feed';
import { useState } from 'react';
function App() {
  const [user,setUser]=useState({})
  
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
  })
  return (
    <div className="App">
      <Navbar user={user} />
      <header className="App-header">
        <Feed user={user}/>
      </header>
    </div>
  );
}

export default App;
