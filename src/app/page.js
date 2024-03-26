import About1 from "@/components/about/About1";
import Banner1 from "@/components/banner/Banner1";
import Banner1Bottom from "@/components/banner/Banner1Bottom";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Destination1 from "@/components/destination/Destination1";
import Home1FacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
import Home1Fecilities2 from "@/components/facilitySlide/Home1Fecilities2";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";
import Home1TourPackage from "@/components/tourPackage/Home1TourPackage";
import Home1Vise from "@/components/visaComponents/Home1Vise";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
export const metadata = {
  title: "HANT TRAVEL",
  description:
    "Hant travel tour agency official webpage",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <Banner1 />
      <Banner1Bottom />
      <About1 />
      <Destination1 />
      <Home1Fecilities2 />
      <Home1TourPackage />
      <Home1WhyChoose />
      <Home1FacilitySlide />
      <Home1Vise />
      <Home1Testimonail />
      <Footer />
    </>
  );
}
