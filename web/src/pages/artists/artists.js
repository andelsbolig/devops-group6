import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockArtists } from '../../data/mockArtists';
import './Artists.css';
import { Header } from '../../components/Header';
import { ROUTES } from '../../routes';


const Artists = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    <div className="artists-list">
      
      {Object.values(mockArtists).map(({ artistId, name, image }) => (
        <div
          key={artistId}
          className="artist-item"
          onClick={() => navigate(ROUTES.ARTIST_DETAIL(artistId))}
        >
          <img src={image} alt={name} className="artist-item-image" />
          <span className="artist-item-name">
            {name}
          </span>
        </div>
      ))}
    </div>  
    </>
  );

};

export default Artists;
