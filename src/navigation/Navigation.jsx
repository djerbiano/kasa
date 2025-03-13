import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "../pages/home/Home";
import Logement from "../pages/logement/Logement";
import Apropos from "../pages/a-propos/Apropos";
import Page404 from "../pages/page404/Page404";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="*" element={<Navigate replace to="/page404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
