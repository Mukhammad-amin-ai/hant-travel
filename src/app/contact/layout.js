import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumb pagename="Contact Us" pagetitle="Contact Us" />
      {children}
      <Footer />
    </>
  );
};

export default layout;
