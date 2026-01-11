import HomePage from "../src/pages/home";
import NavBar from "../src/components/NavBar";
import Properties from "../src/pages/Properties";
import Adding from "../src/pages/Adding";
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
