import Banner1 from "@/components/banner/Banner1";
import Banner1Bottom from "@/components/banner/Banner1Bottom";
import Destination1 from "@/components/destination/Destination1";
import Home1FacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
import Home1Fecilities2 from "@/components/facilitySlide/Home1Fecilities2";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home1TourPackage from "@/components/tourPackage/Home1TourPackage";
import Home1Vise from "@/components/visaComponents/Home1Vise";
import Home1WhyChoose from "@/components/whyChoose/Home1WhyChoose";
import VideoSection from "@/components/videoSection/Home2VideoSection";

export const metadata = {
  title: "HANT TRAVEL",
  description: "Hant travel tour agency official webpage",
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
      <Destination1 />
      <Home1Fecilities2 />
      <VideoSection />
      <Home1TourPackage />
      <Home1WhyChoose />
      <Home1FacilitySlide />
      <Home1Vise />
      <Footer />
    </>
  );
}
