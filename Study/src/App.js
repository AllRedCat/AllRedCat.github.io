import './App.css';
import NavBar from './NavBar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='NavBar'>
          <NavBar />
        </div>
        <div className='main'>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;