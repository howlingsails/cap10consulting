import React from "react";

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{service.tier}</h2>
                <h4>Challenges We Can Solve</h4>
                <ul>
                    {service.problems.map((problem, index) => (
                        <li key={index}>{problem}</li>
                    ))}
                </ul>
                <h4>How We Can Help</h4>
                <ul>
                    {service.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                    ))}
                </ul>
                <h4>Related Projects</h4>
                <ul>
                    {service.relatedProjects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ServiceModal;
