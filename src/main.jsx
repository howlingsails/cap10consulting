// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/ServicesPage";
import Resources from "./pages/Resources";
import "./assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Services />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
