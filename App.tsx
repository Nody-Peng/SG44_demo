import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import TopicGrid from "./components/TopicGrid";
import TimelineSection from "./components/TimelineSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Nav */}
      <Navbar />

      <main>
        {/* Landing Section */}
        <Hero />

        {/* Latest Updates */}
        <NewsSection />

        {/* Research Themes */}
        {/* <TopicGrid /> */}

        {/* Important Deadlines */}
        {/* <TimelineSection /> */}
      </main>

      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}

export default App;
