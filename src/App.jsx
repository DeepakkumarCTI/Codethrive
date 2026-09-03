
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Process from "./pages/Process.jsx";
import Services from "./pages/Services.jsx";
import Awards from "./pages/Awards.jsx";
import Main from "./pages/Main.jsx";
import Contact from "./pages/Contacts.jsx";

// Floating WhatsApp component
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <BrowserRouter>
      
      {/* All website pages */}
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Appears on every page */}
      <FloatingWhatsApp />

    </BrowserRouter>
  );
}

