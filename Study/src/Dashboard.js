import React from "react";
import './Main.css';

function CPUview() {
    return (
        <div className="CPU-view">
            <h2>CPU</h2>
        </div>
    );
}

function RAMview() {
    return (
        <div className="RAM-view">
            <h2>RAM</h2>
        </div>
    );
}

function SWAPview() {
    return (
        <div className="SWAP-view">
            <h2>SWAP</h2>
        </div>
    );
}

function Main() {
    return (
        <div className="main">
            <div className="container1">
                <div className="content">
                    <div className="CPU">
                        <CPUview />
                    </div>
                    <div className="RAN">
                        <RAMview />
                    </div>
                    <div className="SWAP">
                        <SWAPview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;