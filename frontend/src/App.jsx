import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdmitCardDownload from "./pages/admitCard/AdmitCardDownload";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admitcard" element={<AdmitCardDownload />}></Route>
      </Routes>
    </>
  );
}

export default App;
