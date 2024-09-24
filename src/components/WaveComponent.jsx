import React from 'react';
import '../assets/styles/WaveComponents.css';

const WaveComponent = () => {
    return (
        <div className="wave-container">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave-1" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
                    <path id="gentle-wave-2" d="M-160 40c40 0 60-22 90-22s60 22 90 22 60-22 90-22 60 22 90 22v40h-360z" />
                    <path id="gentle-wave-3" d="M-160 50c20 0 50-12 80-12s50 12 80 12 50-12 80-12 50 12 80 12v50h-320z" />
                </defs>

                <g className="parallax">
                    <use xlinkHref="#gentle-wave-1" x="34" y="10" fill="rgba(0,35,80,0.45)" />
                    <use xlinkHref="#gentle-wave-1" x="5" y="11" fill="rgba(0,35,80,0.5)" />

                    <use xlinkHref="#gentle-wave-2" x="136" y="11" fill="rgba(0,35,80,0.55)" />
                    <use xlinkHref="#gentle-wave-2" x="379" y="12" fill="rgba(0,35,80,0.6)" />

                    <use xlinkHref="#gentle-wave-3" x="50" y="14" fill="rgba(0,35,80,0.4)" />
                    <use xlinkHref="#gentle-wave-3" x="10" y="13" fill="rgba(0,35,80,0.65)" />
                    <use xlinkHref="#gentle-wave-3" x="90" y="15" fill="rgba(0,35,80,0.35)" />
                </g>

            </svg>
        </div>
    );
};

export default WaveComponent;
