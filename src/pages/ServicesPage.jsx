import React, { useState } from "react";
import services from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import PopupModal from "../components/PopupModal";
import WaveComponent from "../components/WaveComponent"; // Import the new wave component

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleCardClick = (service) => {
        setSelectedService(service);
        if (hoverTimeout) clearTimeout(hoverTimeout);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
        if (hoverTimeout) clearTimeout(hoverTimeout);
    };


    return (
        <div className="services-page-container">
            {/* Add the wave component */}
            <WaveComponent />

            {/* Header above the wave */}
            <div className="header" style={{ zIndex: 2 }}>
                <h1>ℭ𝔞𝔭⥠⦿𝔟𝔦𝔩𝔩 Consulting</h1>
                <p className="quote">"A smooth seas rarely make a skilled sailor." — Unknown</p>
                <p className="smallquote">"A developer’s logbook is more than just notes—it's the map to your growth. Document every storm, every solution, and you’ll sail smarter into the next challenge." — Cap10Bill</p>
                <p >Guiding you through the rough waters of development and technology with resilience and expertise.</p>
            </div>

            <div className="services-page">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(service)}
                    >
                        <ServiceCard service={service} />
                    </div>
                ))}

                {selectedService && (
                    <PopupModal
                        service={selectedService}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default ServicesPage;
