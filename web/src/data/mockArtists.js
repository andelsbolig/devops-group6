const artistMaelle = process.env.PUBLIC_URL + '/artistMaelle.svg';
// import artistAlex from './artistAlex.svg'; // uncomment if you have it

export const mockArtists = [ 
  { 
      artistId: "maelle",
      name: 'Maelle Desendre',
      image: artistMaelle,
      bio: 'Maelle is an amazing artist and duelist',
  },
{
    artistId: "alex",
    name: 'Alex Shadow',
    image: artistMaelle, // or artistAlex if you have it
    bio: 'Alex is a talented painter with an edgy style, also known as Alex the edger.',
  },
];
