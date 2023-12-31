import React from "react";
import './Dashboard.css';
import Chart from 'react-apexcharts';

// CPU usage view

const CPUusage = () => {
    const options = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#C7C7C7',
                    strokeWidth: '67%',
                    margin: 0,
                },
                dataLabels: {
                    show: true,
                    name: {
                        fontSize: '16px',
                        offsetY: 20,
                        color: '#ED773B',
                    },
                    value: {
                        fontSize: '22px',
                        offsetY: -10,
                    },
                },
            },
        },
        fill: {
            type: 'solid', // Set to 'solid' for a single color
            colors: ['#ED773B'], // Set the color you want here
        },
        series: [32], // Your data series
        labels: ['Usage'],
    };

    return (
        <div className="chart-container">
            {/* Render the ApexChart component for Gauge Chart */}
            <Chart options={options} series={options.series} type="radialBar" height="100%" />
        </div>
    );
};

// RAM usage view

const RAMusage = () => {
    const options = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#C7C7C7',
                    strokeWidth: '67%',
                    margin: 0,
                },
                dataLabels: {
                    show: true,
                    name: {
                        fontSize: '16px',
                        offsetY: 20,
                        color: '#ED773B',
                    },
                    value: {
                        fontSize: '22px',
                        offsetY: -10,
                    },
                },
            },
        },
        fill: {
            type: 'solid', // Set to 'solid' for a single color
            colors: ['#ED773B'], // Set the color you want here
        },
        series: [59], // Your data series
        labels: ['Usage'],
    };

    return (
        <div className="chart-container">
            {/* Render the ApexChart component for Gauge Chart */}
            <Chart options={options} series={options.series} type="radialBar" height="100%" />
        </div>
    );
};

// SWAP usage view

const SWAPusage = () => {
    const options = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#C7C7C7',
                    strokeWidth: '67%',
                    margin: 0,
                },
                dataLabels: {
                    show: true,
                    name: {
                        fontSize: '16px',
                        offsetY: 20,
                        color: '#ED773B',
                    },
                    value: {
                        fontSize: '22px',
                        offsetY: -10,
                    },
                },
            },
        },
        fill: {
            type: 'solid', // Set to 'solid' for a single color
            colors: ['#ED773B'], // Set the color you want here
        },
        series: [43], // Your data series
        labels: ['Usage'],
    };

    return (
        <div className="chart-container">
            {/* Render the ApexChart component for Gauge Chart */}
            <Chart options={options} series={options.series} type="radialBar" height="100%" />
        </div>
    );
};

function CPUview() {
    return (
        <div className="View">
            <h2>CPU</h2>
            <div className="Porcent-graph">
                <CPUusage />
            </div>
        </div>
    );
}

function RAMview() {
    return (
        <div className="View">
            <h2>RAM</h2>
            <div className="Porcent-graph">
                <RAMusage />
            </div>
        </div>
    );
}

function SWAPview() {
    return (
        <div className="View">
            <h2>SWAP</h2>
            <div className="Porcent-graph">
                <SWAPusage />
            </div>
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