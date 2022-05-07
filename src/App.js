import './App.css';
import Navbar from './components/navbar/Navbar';
import Feed from './Feed';
function App() {
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
