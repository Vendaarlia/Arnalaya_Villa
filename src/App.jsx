import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Updates from "./pages/updates/Updates";
import Solutions from "./pages/solutions/Solutions";
import Contact from "./pages/contact/Contact";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMenu = location.pathname === "/updates";

  const pageTitles = {
    "/": "Arnalaya Villa | the luxury signature",
    "/about": "About Us | Arnalaya Villa | the luxury signature",
    "/solutions": "Solutions | Arnalaya Villa | the luxury signature",
    "/updates": "Updates | Arnalaya Villa | the luxury signature",
    "/contact": "Contact | Arnalaya Villa | the luxury signature",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Aiden Brooks";
    document.title = currentTitle;

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 750);
  }, [location.pathname]);

  return (
    <div className="app">
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isDark={isDarkMenu} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
