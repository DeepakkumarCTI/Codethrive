import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Process from "./pages/Process.jsx";
import Services from "./pages/Services.jsx";
import Awards from "./pages/Awards.jsx";
import Main from "./pages/Main.jsx";
import Contact from "./pages/Contacts.jsx";

import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import FloatingPhone from "./components/FloatingPhone.jsx";
import Loader from "./components/Loader.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Website Routes */}
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating Contact Buttons */}
      <FloatingWhatsApp />
      <FloatingPhone />

      {/* Full Screen Loading Animation */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
    </BrowserRouter>
  );
}