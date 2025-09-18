import {Routes, Route} from "react-router-dom";
import Gallery from "./pages/Gallery";
import PaintingDetail from "./pages/PaintingDetail";
import NotFound from "./pages/NotFound";
import {Login} from "./logInSite";
import UserCreation from "./userCreationSite";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/painting/:paintingId" element={<PaintingDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<UserCreation />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
