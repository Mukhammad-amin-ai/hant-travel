// import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "HANT TRAVEL",
  description: "Gallery",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Newslatter /> */}
      <Footer />
    </>
  );
};

export default layout;
