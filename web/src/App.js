import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import UserCreation from "./userCreationSite";

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
            <Route path="/usercreation" element={<UserCreation />} />
        </Routes>
    </div>
  );
}

export default App;
