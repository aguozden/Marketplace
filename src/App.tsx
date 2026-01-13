import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./layouts/Mainlayout";
import Needs from "./pages/Needs";
import Capabilities from "./pages/Capabilities";
import SignUp from "./pages/SignUp";  

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/needs" element={<Needs />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;