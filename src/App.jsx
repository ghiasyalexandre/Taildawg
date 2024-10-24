import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Customizer from "./components/Customizer.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Order from "./components/Order.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";

import "./App.css";
import MainNav from "./components/MainNav.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ScrollToTop />
          <MainNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customizer" element={<Customizer />} />

            {/* Customizer Routes */}
            {/* <Route path="/customizer" element={<EditorNav />}> */}
            {/* </Route> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
