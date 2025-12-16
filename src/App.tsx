import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Page Components
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
import Features from "./components/landing/Features";
import Service from "./components/landing/Service";
import Price from "./components/landing/Price";
import Testimonials from "./components/landing/Testimonials";
import FAQ from "./components/landing/FAQ";
import Waitlist from "./components/landing/Waitlist";
import Footer from "./components/landing/Footer";

// Auth Pages
import Signup from "./components/auth/signup";
import Login from "./components/auth/Login";

// Optional: Create a Layout wrapper for landing page
const LandingLayout = () => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <main className="flex-grow-1">
      <Hero />
      <About />
      <Features />
      <Service />
      <Price />
      <Testimonials />
      <FAQ />
      <Waitlist />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page - All sections in one route */}
        <Route path="/" element={<LandingLayout />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Optional: Catch-all for 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <a
                  href="/"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Back to Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
