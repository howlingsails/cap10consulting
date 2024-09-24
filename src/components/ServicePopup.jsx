// components/ServicePopup.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ServicePopup = ({ show, handleClose, serviceDetails }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{serviceDetails.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Problems We Address:</h5>
                <ul>
                    {serviceDetails.problems.map((problem, index) => (
                        <li key={index}>{problem}</li>
                    ))}
                </ul>
                <h5>Potential Solutions:</h5>
                <ul>
                    {serviceDetails.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                    ))}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ServicePopup;
