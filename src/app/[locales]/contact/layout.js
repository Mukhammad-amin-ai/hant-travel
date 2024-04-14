import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
export const metadata = {
  title: "HANT TRAVEL",
  description:
    "Contact With Us",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default layout;
