import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
