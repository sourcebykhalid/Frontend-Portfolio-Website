import React from "react";
import Hero from "./components/Hero";

import Portfolio from "./components/Portfolio";
import Tech from "./components/Tech";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <div className="text-white bg-zinc-950 h-full ">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Tech />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
