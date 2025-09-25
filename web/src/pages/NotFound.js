import React from 'react';
import './NotFound.css';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found-page">
            <div className="not-found-content">
                <h1 className="not-found-title" data-testid="notfound-title">404</h1>
                <p className="not-found-message" data-testid="notfound-message">Page not found</p>
                <button
                    className="home-button"
                    data-testid="return-gallery-button"
                    onClick={() => navigate('/')}
                >
                    Return to Gallery
                </button>
            </div>
        </div>
    );
};

export default NotFound;