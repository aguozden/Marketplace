import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./layouts/Mainlayout";
import Needs from "./pages/Needs";
import Capabilities from "./pages/Capabilities";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import CreateNeed from "./pages/CreateNeed";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/needs" element={<Needs />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/needs/new" element={<CreateNeed />} />
      </Route>
    </Routes>
  );
}

export default App;
