import React from "react";
import './Main.css';
import CPUview from './MainContent/CPUview.js';
import RAMview from './MainContent/RAMview.js';
import SWAPview from "./MainContent/SWAPview.js";

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