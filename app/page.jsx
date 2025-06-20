import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="min-h-screen w-screen bg-[#ffffff]">
      <NavBar />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <Roadmap />
      <Footer />
    </main>
  );
};

export default HomePage;
