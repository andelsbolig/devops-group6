import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import UserCreation from "./userCreationSite";
import ForgotPassword from "./forgotPasswordSite";
import { Login } from "./logInSite";

const Home = () => {
  return <div>
      Home Page
      <Link to={"/logInSite"}>Go to login</Link>
  </div>;
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/usercreation" element={<UserCreation />} />
            <Route path="/logInSite" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
