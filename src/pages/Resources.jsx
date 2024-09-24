// src/pages/Resources.jsx

import React from 'react';
import { resources } from '../data/resources';

const Resources = () => (
    <div className="resources-page">
        <h1>Useful Resources</h1>
        {resources.map((section, index) => (
            <div key={index} className="resource-section">
                <h3>{section.category}</h3>
                <ul>
                    {section.links.map((link, i) => (
                        <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default Resources;
