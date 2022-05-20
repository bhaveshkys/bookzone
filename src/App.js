import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/navbar/Navbar';
import Feed from './pages/Feed';
import { useState } from 'react';
function App() {
  const [user,setUser]=useState({})
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  console.log(user)
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Feed/>
      </header>
    </div>
  );
}

export default App;
