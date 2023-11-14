import React from "react";
import './Servers.css';

const ServerUnit = () => {
    return (
        <div className="server-container">
            <div className="server-name">
                <h3>Server 1</h3>
                <h4>Subname</h4>
            </div>
            <div className="server-about">
                <h3>About the server</h3>
            </div>
            <div className="server-stattus">
                <h3>Status</h3>
                <h5>online</h5>
            </div>
        </div>
    );
}

function Servers() {
    return (
        <div className="main">
            <div className="container1">
                <h1>Servers</h1>
                <ServerUnit />
            </div>
        </div>
    );
}

export default Servers;