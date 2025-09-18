import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ForgotPasswordSite from "./forgotPasswordSite";

const Home = () => {
  return <div>
      Home Page
  </div>;
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgot-password" element={<ForgotPasswordSite />} />
        </Routes>
    </div>
  );
}

export default App;
