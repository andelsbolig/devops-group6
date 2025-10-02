import React from 'react';
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

import { ROUTES } from "../routes";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-container">
                <nav className="header-nav">
                    
                    {/* Left - Logo */}
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        navigate(ROUTES.GALLERY);
                    }} className="logo-link">
                        <img
                            src={`${process.env.PUBLIC_URL}/logo.png`}
                            alt="Take The Art And Run Logo"
                            className="logo-icon"
                        />
                        <h1 className="site-title">Take The Art And Run</h1>
                    </a>

                    {/* Right - Sign In */}
                    <div className="nav-links">
                        <button
                            onClick={() => navigate(ROUTES.ARTISTS)}
                            className="nav-button nav-button-ghost"
                        >
                            About artists
                        </button>
                        <button
                            onClick={() => navigate(ROUTES.LOGIN)}
                            className="nav-button nav-button-primary"
                        >
                            <User className="button-icon" size={16} strokeWidth={2} />
                            Sign In
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
