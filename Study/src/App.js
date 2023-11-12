import './App.css';
import './NavBar.css';
import Dashboard from './Dashboard';
import Servers from './Servers';
import Github from './Github';
import About from './About';




function App() {

  function NavBar() {
  
    return (
      <div className="Bar">
            <nav>
                <ul className="navigation">
                    <li>
                        <button>
                            <i class="bi bi-columns-gap"></i>
                            <p>Dashboard</p>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="bi bi-hdd-stack"></i>
                            <p>Servers</p>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="bi bi-github"></i>
                            <p>GitHub</p>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="bi bi-person-circle"></i>
                            <p>About</p>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  function Painel() {
    return(
      <div>
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='NavBar'>
          <NavBar />
        </div>
        <div className='main'>
          <Painel />
        </div>
      </div>
    </div>
  );
}

export default App;