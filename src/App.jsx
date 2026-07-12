import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Journey from "./components/Journey";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <div className="max-w-[750px] mx-auto w-[92%]">
          <Navbar />

          <main className="px-2 pb-20">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Projects />
                    <Journey />
                  </>
                }
              />
              <Route path="/projects" element={
                <div className="animate-in fade-in duration-500 mt-4 sm:mt-8">
                  <Projects />
                </div>
              } />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </main>

          <div className="px-2">
            <Quote />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;