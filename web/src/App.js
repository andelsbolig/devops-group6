
import Gallery from "./pages/Gallery";
import PaintingDetail from "./pages/PaintingDetail";
import NotFound from "./pages/NotFound";
import UserCreation from "./pages/UserCreation";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
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
        <Routes>
            <Route path={ROUTES.GALLERY} element={<Gallery />} />
            <Route path={ROUTES.PAINTING_DETAIL()} element={<PaintingDetail />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.CREATE_ACCOUNT} element={<UserCreation />} />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/logInSite" element={<Login />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:artistId" element={<ArtistDetail />} />
        </Routes>
    );
}

export default App;
