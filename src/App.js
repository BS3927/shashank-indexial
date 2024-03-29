import React, { lazy, Suspense } from "react";
import "./App.scss";
import About from "./components/About";
import CompanyBlock from "./components/CompanyBlock";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Careers from "./components/Careers";
import NewsandMedia from "./components/NewsandMedia";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {
        <BrowserRouter>
          <Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Technology" element={<Technology />} />
              <Route path="/Resourses" element={<CompanyBlock />} />
              <Route path="/About" element={<About />} />
              <Route path="/Careers" element={<Careers />} />
              <Route path="/NewsandMedia" element={<NewsandMedia />} />
              <Route path="/Partners" element={<Partners />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      }

      <Footer />
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
