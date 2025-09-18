import './App.css';
import { Routes, Route, Link } from "react-router-dom";

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
        </Routes>
    </div>
  );
}

export default App;
