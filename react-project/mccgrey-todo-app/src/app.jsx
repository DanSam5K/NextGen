import React from "react";
import Header from "./components/home/Home";
import Nav from "./components/nav/nav";
import About from "./components/about/About";

const app = () => {
  return (
    // REACT FRAGMENTS
    <>
      <Header />
      <Nav />
      <About />
    </>
  );
};

export default app;
