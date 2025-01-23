// src/App.jsx
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { NavbarWithMegaMenu } from "./componentes/pages/Ui/Navbar.jsx";
import './App.css';
import { FooterWithLogo } from "./componentes/pages/Ui/Footer.jsx";
import { TestAD8 } from "./componentes/pages/TestAD8";
import Centre from "./componentes/pages/Centre";
import { Equip } from "./componentes/pages/Equip";
import { Home } from "./componentes/pages/Home";
import { Contact } from "./componentes/pages/Contact.jsx";
import Neurologia from "./componentes/pages/Neurologia.jsx";
import { Psiquiatria } from "./componentes/pages/Psiquiatria.jsx";
import { NeuroPsicologia } from "./componentes/pages/NeuroPsicologia.jsx";
import { Psicologia } from "./componentes/pages/Psicologia.jsx";
import LanguageSwitcher from "./componentes/LanguageSwitcher.jsx"; // Importar el LanguageSwitcher

// Componente ScrollToTop
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Home/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageSwitcher /> {/* Añadir el LanguageSwitcher aquí, antes del Navbar */}
      <NavbarWithMegaMenu/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/neurologia" element={<Neurologia/>} />
        <Route path="/psiquiatria" element={<Psiquiatria/>} />
        <Route path="/neuroPsicologia" element={<NeuroPsicologia/>} />
        <Route path="/psicologia" element={<Psicologia/>} />
        <Route path="/test-ad8" element={<TestAD8/>}/>
        <Route path="/centre" element={<Centre/>}/>
        <Route path="/equip" element={<Equip/>}/>    
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <FooterWithLogo/>
    </BrowserRouter>
  );
}

export default App;