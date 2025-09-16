import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import PropertySection from "./components/PropertySection.jsx";
import Footer from "./components/Footer.jsx";
import LuxuriousPage from "./components/LuxuriaSection.jsx"

function App() {
  return (
    <div className="font-sans">
      <Nav />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeatureSection />
              <PropertySection />
            </>
          }
        />

        {/* Luxurious page */}
        <Route path="/luxurious" element={<LuxuriousPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
