import "./index.css";
import AuthSection from "./components/auth/AuthSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthSection />} />
          <Route path="/login" element={<AuthSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
