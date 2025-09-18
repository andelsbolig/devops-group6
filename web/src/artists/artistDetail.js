import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import artistsData from './artistData';

export const ArtistDetail = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  console.log("artistId:", artistId);

  const artist = artistsData[artistId];
  console.log("artist data:", artist);

  if (!artist) {
    return <p>Artist not found.</p>;
  }

  return (  
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        ← Back
      </button>
      <h1>{artist.name}</h1>
      <img src={artist.image} alt={artist.name} height={200} />
      <p style={{ maxWidth: '600px', marginTop: '15px' }}>{artist.bio}</p>
    </div>
  );
};


