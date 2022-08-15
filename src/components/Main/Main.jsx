import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";

const MyComponent = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    );
};

export default MyComponent;
