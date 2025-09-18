import React from 'react';
import { useNavigate } from 'react-router-dom';
import artistsData from './artistData';

export const Artists = () => {
  const navigate = useNavigate();

  return (
    <div>
      {Object.values(artistsData).map(({ id, name, image }) => (
        <div
          key={id}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}
          onClick={() => navigate(`/artists/${id}`)}
        >
          <img src={image} alt={name} height={100} />
          <span style={{ marginLeft: '15px', fontSize: '1.2rem', fontWeight: 'bold' }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};
