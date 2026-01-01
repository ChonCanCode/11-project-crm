import HomePage from "../pages/home";
import NavBar from "../components/NavBar";
import Properties from "../pages/Properties";
import Adding from "../pages/Adding";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Adding" element={<Adding />} />
      </Routes>
    </>
  );
}

export default App;
