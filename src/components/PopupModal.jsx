import React, { useEffect, useState } from "react";

const getRandomFromArray = (arr, numItems = 1) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, numItems);
};

const PopupModal = ({ service, onClose }) => {
    const [randomQuote, setRandomQuote] = useState('');
    const [randomProjects, setRandomProjects] = useState([]);

    useEffect(() => {
        // Randomly select a quote from the service quotes array
        if (service?.quote && Array.isArray(service?.quote)) {
            const selectedQuote = getRandomFromArray(service.quote, 1)[0];
            setRandomQuote(selectedQuote);
        } else {
            setRandomQuote(service?.quote);
        }

        // Randomly select 3 projects from the related projects array
        if (service?.relatedProjects && Array.isArray(service?.relatedProjects)) {
            const selectedProjects = getRandomFromArray(service.relatedProjects, 3);
            setRandomProjects(selectedProjects);
        }
    }, [service]);

    useEffect(() => {
        // Close the modal if clicking outside of it
        const handleClickOutside = (event) => {
            if (event.target.classList.contains("popup-overlay")) {
                onClose();
            }
        };

        // Attach event listener for clicks
        document.addEventListener("click", handleClickOutside);

        return () => {
            // Cleanup event listener
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>{service?.tier}</h2>
                <h4>Challenges We Can Solve</h4>
                <ul>
                    {service?.problems?.map((problem, index) => (
                        <li key={index}>{problem}</li>
                    ))}
                </ul>
                <h4>How We Can Help</h4>
                <ul>
                    {service?.solutions?.map((solution, index) => (
                        <li key={index}>{solution}</li>
                    ))}
                </ul>
                {randomQuote && (
                    <>
                        <h4>Referral Quote</h4>
                        <blockquote>{randomQuote}</blockquote>
                    </>
                )}
                {randomProjects.length > 0 && (
                    <>
                        <h4>Related Projects</h4>
                        <ul>
                            {randomProjects.map((project, index) => (
                                <li key={index}>{project}</li>
                            ))}
                        </ul>
                    </>
                )}
                <div className="popup-buttons">
                    <a
                        href="https://calendly.com/cap10bill-howlingsails/30min?back=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="calendly-link"
                    >
                        Book Consultation
                    </a>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
