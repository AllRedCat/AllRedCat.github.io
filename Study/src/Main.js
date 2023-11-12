import React from "react";
import './Main.css';
import CPUview from './MainContent/CPUview.js';
import RAMview from './MainContent/RAMview.js';

function Main() {
    return (
        <div className="main">
            <div className="container1">
                <div className="CPU">
                    <CPUview />
                </div>
                <div className="RAM">
                    <RAMview />
                </div>
            </div>
        </div>
    );
}

export default Main;