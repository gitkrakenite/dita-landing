import "./App.css";
import Events from "./screen/Events";
import Landing from "./screen/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./screen/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="bg-slate-200  min-h-[100vh] hide-scrollbar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
