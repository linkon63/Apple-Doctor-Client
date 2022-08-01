import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home/Home'
import Blog from '../Blog/Blog'
const ComponentsRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
};

export default ComponentsRoutes;