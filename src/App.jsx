import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Public from "./components/Public";
import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Public />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
