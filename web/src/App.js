import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./logInSite";
import { Artists } from './artists/artists';
import { ArtistDetail } from './artists/artistDetail';

const Home = () => {
  return <div>
      Home Page &nbsp;
      <Link to={"/logInSite"}>Go to login</Link> &nbsp;
      <Link to={"/artists"}>Artists</Link> &nbsp;
  </div>;
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logInSite" element={<Login />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:artistId" element={<ArtistDetail />} />
        </Routes>
    </div>
  );
}

export default App;
