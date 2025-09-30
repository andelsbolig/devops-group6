import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockArtists}  from '../../data/mockArtists';
import './ArtistDetail.css';
import { Header } from '../../components/Header';


const ArtistDetail = () => {
  const { artistId } = useParams();
  const artist = mockArtists.find(a => a.artistId === artistId);
  const navigate = useNavigate();
  
  console.log("artistId:", artistId);
  console.log("artist data:", artist);

  if (!artist) {
    return (
      <>
        <Header />
        <div className="artist-detail-container">
          <p className="artist-detail-notfound">Artist not found.</p>
          <button className="artist-detail-back" onClick={() => navigate(-1)}>← Back</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="artist-detail-container">
        <button className="artist-detail-back" onClick={() => navigate(-1)}>← Back</button>
        <div className="artist-detail-card">
          <img
            src={artist.image}
            alt={artist.name}
            className="artist-detail-image"
          />
          <h1 className="artist-detail-name">{artist.name}</h1>
          <p className="artist-detail-bio">{artist.bio}</p>
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;




