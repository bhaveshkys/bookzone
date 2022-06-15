import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';
import { auth,storage } from './firebase';
import {  ref ,getDownloadURL } from "firebase/storage";
import Navbar from './components/navbar/Navbar';
import Feed from './pages/feed/Feed';
import { useState } from 'react';
import ProfilePage from "./pages/profile/Profile"
function App() {
  const [user,setUser]=useState({})
  
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
  })
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Feed user={user} />} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
