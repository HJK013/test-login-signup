import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import SignUpPage from "../page/SignUpPage";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </HashRouter>
    );
};

export default Router;
