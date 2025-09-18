import React, { useState } from 'react';
import { Header } from '../components/Header';
import { mockPaintings, getTimeRemaining, formatCurrency } from '../data/mockPaintings';
import './PaintingDetail.css';
import {useNavigate, useParams} from "react-router-dom";

const PaintingDetail = () => {
    const { paintingId } = useParams(); // paintingId is string
    const painting = mockPaintings.find(p => p.id === paintingId);
    const [bidAmount, setBidAmount] = useState('');
    const navigate = useNavigate();

    if (!painting) {
        return <div  className="detail-page">
            <Header />
            <div className="not-found">Painting not found</div>
        </div>
    }

    return (
        <div className="detail-page">
            <Header />

            <main className="detail-content">
                <button
                    className="back-button"
                    data-testid="back-button"
                    onClick={() => navigate('/')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5"/>
                        <path d="M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Auctions
                </button>

                <div className="detail-grid">
                    <div className="image-section">
                        <div className="painting-frame">
                            <img
                                src={painting.imageUrl}
                                alt={painting.title}
                                className="painting-full-image"
                            />
                        </div>
                    </div>

                    <div className="info-section">
                        <div className="title-section">
                            <h1 className="painting-name" data-testid="painting-title">{painting.title}</h1>
                            <p className="artist-name" data-testid="painting-artist">{painting.artist}, {painting.year}</p>
                        </div>

                        <div className="bid-card primary-card">
                            <div className="bid-header">
                                <div className="bid-current">
                                    <p className="label">Current Bid</p>
                                    <p className="amount" data-testid="current-bid" >{formatCurrency(painting.currentBid)}</p>
                                </div>
                                <div className="time-left">
                                    <p className="label">Time Remaining</p>
                                    <p className="time-display">
                                        <svg className="clock-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                        {getTimeRemaining(painting.endTime)}
                                    </p>
                                </div>
                            </div>

                            <div className="bid-count">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="7"/>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                                </svg>
                                <span>{painting.bidCount} bids</span>
                            </div>

                            <div className="bid-form">
                                <input
                                    data-testid="bid-input"
                                    type="number"
                                    placeholder={`Minimum bid: ${formatCurrency(painting.minimumBid)}`}
                                    value={bidAmount}
                                    onChange={(e) => setBidAmount(e.target.value)}
                                    className="bid-input"
                                />
                                <button className="place-bid-button">
                                    Place Bid
                                </button>
                            </div>
                        </div>

                        <div className="details-card">
                            <h2 className="card-title">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 16v-4"/>
                                    <path d="M12 8h.01"/>
                                </svg>
                                Artwork Details
                            </h2>
                            <dl className="details-list">
                                <div className="detail-item">
                                    <dt className="detail-label">Medium</dt>
                                    <dd className="detail-value">{painting.medium}</dd>
                                </div>
                                <div className="detail-item">
                                    <dt className="detail-label">Dimensions</dt>
                                    <dd className="detail-value">{painting.dimensions}</dd>
                                </div>
                                <div className="detail-item">
                                    <dt className="detail-label">Condition</dt>
                                    <dd className="detail-value">{painting.condition}</dd>
                                </div>
                                <div className="detail-item">
                                    <dt className="detail-label">Estimate</dt>
                                    <dd className="detail-value">
                                        {formatCurrency(painting.estimate.min)} - {formatCurrency(painting.estimate.max)}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="artist-card">
                            <h2 className="card-title">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="7"/>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                                </svg>
                                About the Artist
                            </h2>
                            <p className="artist-bio">{painting.artistBio}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaintingDetail;