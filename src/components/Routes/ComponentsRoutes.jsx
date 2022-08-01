import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home/Home'
const ComponentsRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </div>
    );
};

export default ComponentsRoutes;