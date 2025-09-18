import React from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header-container">
                <nav className="header-nav">

                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }} className="logo-link">
                        <svg className="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <path d="M3 9h18"/>
                            <path d="M9 21V9"/>
                            <circle cx="15" cy="15" r="2"/>
                        </svg>
                        <h1 className="site-title">Take The Art And Run</h1>
                    </a>

                    <div className="nav-links">
                        <button
                            onClick={() => navigate('/')}
                            className="nav-button nav-button-ghost"
                        >
                            Browse
                        </button>

                        <button
                            onClick={() => navigate('/login')}
                            className="nav-button nav-button-primary"
                        >
                            <svg
                                className="button-icon"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Sign In
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
