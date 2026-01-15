import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}
export default App;
