import React from 'react';
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

import { Header } from '../components/Header';
import { mockPaintings, formatCurrency } from '../data/mockPaintings';
import { ROUTES } from "../routes";

import './Gallery.css';

const Gallery = () => {
    const navigate = useNavigate();
    return (
        <div className="gallery-page">
            <Header />

            <main className="main-content">
                <section className="hero-section">
                    <h1 className="hero-title" data-testid="gallery-title">Current Auctions</h1>
                    <p className="hero-subtitle">Discover exceptional artworks from renowned artists</p>
                </section>

                <div className="paintings-grid">
                    {mockPaintings.map((painting) => (
                        <a
                            key={painting.id}
                            href={`/painting/${painting.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(ROUTES.PAINTING_DETAIL(painting.id));
                            }}
                            className="painting-card-link"
                        >
                            <div className="painting-card" data-testid={`painting-card-${painting.id}`}>
                                <div className="painting-image-container">
                                    <img
                                        src={painting.imageUrl}
                                        alt={painting.title}
                                        className="painting-image"
                                    />
                                </div>
                                <div className="painting-info">
                                    <h3 className="painting-title">{painting.title}</h3>
                                    <p className="painting-artist">{painting.artist}, {painting.year}</p>

                                    <div className="painting-details">
                                        <div className="bid-info">
                                            <span className="bid-label">Current Bid</span>
                                            <span className="bid-amount">{formatCurrency(painting.highestBid)}</span>
                                        </div>

                                        <div className="bid-stats">
                                            <div className="stat-item">
                                                <Users className="stat-icon" size={16} strokeWidth={2} />
                                                <span>{painting.bidCount} bids</span>
                                            </div>
                                            {/*
                                            <div className="stat-item time-remaining">
                                                <Clock className="stat-icon" size={16} strokeWidth={2} />
                                                <span>{}</span>
                                            </div>
                                            */}
                                        </div>

                                        <button className="bid-button">Place Bid</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Gallery;