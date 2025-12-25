import HomePage from "../pages/home";
import NavBar from "../components/NavBar";
import Properties from "../pages/Properties";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;
