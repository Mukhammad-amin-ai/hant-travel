import dynamic from "next/dynamic";
// import Banner from "@/components/banner/Banner1";
// import BannerBottom from "@/components/banner/Banner1Bottom";
// import Destination from "@/components/destination/Destination1";
// import HomeFacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
// import HomeFacilities from "@/components/facilitySlide/Home1Fecilities2";
// import Footer from "@/components/footer/Footer";
// import Header from "@/components/header/Header";
// import HomeTourPackage from "@/components/tourPackage/Home1TourPackage";
// import HomeVise from "@/components/visaComponents/Home1Vise";
// import HomeWhyChoose from "@/components/whyChoose/Home1WhyChoose";
// import VideoSection from "@/components/videoSection/Home2VideoSection";

const Header = dynamic(() => import("@/components/header/Header"));
const Banner = dynamic(() => import("@/components/banner/Banner1"))
const BannerBottom = dynamic(() => import("@/components/banner/Banner1Bottom"))
const Destination = dynamic(() => import("@/components/destination/Destination1"))
const HomeFacilitySlide = dynamic(() => import("@/components/facilitySlide/Home1FacilitySlide"))
const HomeFacilities = dynamic(() => import("@/components/facilitySlide/Home1Fecilities2"))
const HomeTourPackage = dynamic(() => import("@/components/tourPackage/Home1TourPackage"))
const HomeVise = dynamic(() => import("@/components/visaComponents/Home1Vise"))
const Footer = dynamic(() => import("@/components/footer/Footer"))
const HomeWhyChoose = dynamic(() => import("@/components/whyChoose/Home1WhyChoose"))
const VideoSection = dynamic(() => import("@/components/videoSection/Home2VideoSection"))


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
      <Header  />
      <Banner />
      <BannerBottom />
      <Destination />
      <HomeFacilities />
      <VideoSection />
      <HomeTourPackage />
      <HomeWhyChoose />
      <HomeFacilitySlide />
      <HomeVise />
      <Footer />
    </>
  );
}
