import './App.css';
import './NavBar.css';
import Main from './Dashboard';

function NavBar() {
  return (
      <div className="Bar">
          <nav>
              <ul className="navigation">
                  <li>
                      <button>
                          <i class="bi bi-columns-gap"></i>
                          <p>Dahsboard</p>
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