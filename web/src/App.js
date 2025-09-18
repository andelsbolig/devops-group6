import './App.css';
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return <div>
      Home Page
      <Link to={"/login"}>Go to login</Link>
  </div>;
}

const Login = () => {
  return <div>Login Page</div>;
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
