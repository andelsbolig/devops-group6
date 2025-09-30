import React from 'react';
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

import { ROUTES } from "../routes";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header style={styles.header}>
            <div style={styles.headerContainer}>
                <nav style={styles.headerNav}>
                    
                    {/* Left - Logo */}
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        navigate(ROUTES.GALLERY);
                    }} style={styles.logoLink}>
                        <img
                            src={`${process.env.PUBLIC_URL}/logo.png`}
                            alt="Take The Art And Run Logo"
                            style={styles.logoIcon}
                        />
                        <h1 style={styles.siteTitle}>Take The Art And Run</h1>
                    </a>

                    {/* Center - Artists */}
                    <div style={styles.navCenter}>
                        <a
                            href={ROUTES.ARTISTS}
                            onClick={e => { e.preventDefault(); navigate(ROUTES.ARTISTS); }}
                            style={styles.navLinkCenter}
                        >
                            Artists
                        </a>
                    </div>

                    {/* Right - Sign In */}
                    <div style={styles.navRight}>
                        <button
                            onClick={() => navigate(ROUTES.LOGIN)}
                            style={styles.navButtonPrimary}
                        >
                            <User style={styles.buttonIcon} size={16} strokeWidth={2} />
                            Sign In
                        </button>
                    </div>

                </nav>
            </div>
        </header>
    );
};

const styles = {
    header: {
        width: '100%',
        background: '#fff',
        borderBottom: '1px solid #ddd',
    },
    headerContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    headerNav: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60px',
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
    },
    logoIcon: {
        height: '40px',
        marginRight: '10px',
    },
    siteTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 0,
    },
    navCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    navLinkCenter: {
        fontSize: '1.1rem',
        color: '#222',
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    navRight: {
        display: 'flex',
        alignItems: 'center',
    },
    navButtonPrimary: {
        display: 'flex',
        alignItems: 'center',
        background: '#222',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        fontSize: '0.9rem',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    buttonIcon: {
        marginRight: '6px',
    },
};
