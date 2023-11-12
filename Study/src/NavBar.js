import React from "react";
import './NavBar.css';

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
                            <i class="bi bi-person-gear"></i>
                            <p>Services</p>
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

export default NavBar;