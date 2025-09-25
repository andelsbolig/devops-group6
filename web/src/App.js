
import Gallery from "./pages/Gallery";
import PaintingDetail from "./pages/PaintingDetail";
import NotFound from "./pages/NotFound";
import UserCreation from "./pages/UserCreation";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Gallery />} />
            <Route path={ROUTES.PAINTING_DETAIL()} element={<PaintingDetail />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.CREATE_ACCOUNT} element={<UserCreation />} />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
    );
}

export default App;
