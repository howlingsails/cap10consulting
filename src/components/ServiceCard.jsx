// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <div className="service-card-content">
                <h3>{service.tier}</h3>
                <p>{service.description}</p>

                {/* Problems Section */}
                <div className="service-section">
                    <h4>Common Challenges</h4>
                    <ul>
                        {service.problems.map((problem, index) => (
                            <li key={index}>{problem}</li>
                        ))}
                    </ul>
                </div>

                {/* Solutions Section */}
                <div className="service-section">
                    <h4>How I Can Help</h4>
                    <ul>
                        {service.solutions.map((solution, index) => (
                            <li key={index}>{solution}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;
