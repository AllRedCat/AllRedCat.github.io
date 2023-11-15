import React from "react";
import './Servers.css';

const ServerUnit = () => {

    const CircleIcon = () => {
        return (
            <div className="circle-icon">
                <i class="bi bi-circle-fill"></i>
            </div>
        )
    }

    return (
        <div className="server-container">
            <div className="server-name">
                <h3>Server 1</h3>
                <h4>"Paulo's machine"</h4>
            </div>
            <div className="server-about">
                <h3>About the server</h3>
                <h4>4 Core | 8gb RAM | 8gb SWAP</h4>
            </div>
            <div className="server-status">
                <h3>Status</h3>
                <div className="status">
                    <CircleIcon />
                    <h5>online</h5>
                </div>
            </div>
        </div>
    );
}

const ServerUnit2 = () => {

    const CircleIcon = () => {
        return (
            <div className="circle-icon">
                <i class="bi bi-circle-fill circle2"></i>
            </div>
        )
    }

    return (
        <div className="server-container">
            <div className="server-name">
                <h3>Server 2</h3>
                <h4>"Jorges's machine"</h4>
            </div>
            <div className="server-about">
                <h3>About the server</h3>
                <h4>8 Core | 16gb RAM | 8gb SWAP</h4>
            </div>
            <div className="server-status">
                <h3>Status</h3>
                <div className="status">
                    <CircleIcon />
                    <h5>Offline</h5>
                </div>
            </div>
        </div>
    );
}

function Servers() {
    return (
        <div className="main">
            <div className="container1">
                <h1>Servers</h1>
                <div className="units">
                    <ServerUnit />
                    <ServerUnit2 />
                </div>
            </div>
        </div>
    );
}

export default Servers;