import Banner from "@/components/banner/Banner1";
import BannerBottom from "@/components/banner/Banner1Bottom";
import Destination from "@/components/destination/Destination1";
import HomeFacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
import HomeFacilities from "@/components/facilitySlide/Home1Fecilities2";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HomeTourPackage from "@/components/tourPackage/Home1TourPackage";
import HomeVise from "@/components/visaComponents/Home1Vise";
import HomeWhyChoose from "@/components/whyChoose/Home1WhyChoose";
import VideoSection from "@/components/videoSection/Home2VideoSection";
import {useTranslations} from 'next-intl';

export const metadata = {
  title: "HANT TRAVEL",
  description: "Hant travel tour agency official webpage",
  icons: {
    icon: "../../../assets/img/sm-logo.svg",
  },
};


export default function Home() {
  const t = useTranslations("banner")
  const d = useTranslations("countries")

  return (
    <>
      <Header/>
      <Banner banner={t("book")}/>
      <BannerBottom Destination={t("destination")} Type={t('type')} Day={t('day')} Category={t('category')}
                    Visa={t("visa")}/>
      <Destination tour={d("country")} explore={d("explore")} top={d("top")}/>
      <HomeFacilities/>
      <VideoSection/>
      <HomeTourPackage/>
      <HomeWhyChoose/>
      <HomeFacilitySlide/>
      <HomeVise/>
      <Footer/>
    </>
  );
}
