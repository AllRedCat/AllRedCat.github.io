import './App.css';
import './NavBar.css';
import Dashboard from './Dashboard';
import Servers from './Servers';
import Github from './Github';
import About from './About';

function NavBar() {

  return (
    <div className="Bar">
      <nav>
        <ul className="navigation">
          <li>
            <a href="/dashboard">
              <i class="bi bi-columns-gap"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/servers">
              <i class="bi bi-hdd-stack"></i>
              <p>Servers</p>
            </a>
          </li>
          <li>
            <a href="/github">
              <i className="bi bi-github"></i>
              <p>GitHub</p>
            </a>
          </li>
          <li>
            <a href="/about">
              <i class="bi bi-person-circle"></i>
              <p>About</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {

  let content;

  switch (window.location.pathname) {
    case "/dashboard":
      content = <Dashboard />
      break;
    case "/servers":
      content = <Servers />
      break;
    case "/github":
      content = <Github />
      break;
    case "/about":
      content = <About />
      break;
    default:
      content = <Dashboard />
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='NavBar'>
          <NavBar />
        </div>
        <div className='main'>
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;