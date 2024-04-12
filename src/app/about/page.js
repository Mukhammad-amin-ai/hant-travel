import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home2Team from "@/components/team/Home2Team";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";

export const metadata = {
  title: "HANT TRAVEL",
  description:
    "About HANT TRAVEL tour agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <Home2About />
      <Home2WhyChoose />
      <Home2Team />
      <Home1Testimonail />
      <Footer />
    </>
  );
};

export default page;
