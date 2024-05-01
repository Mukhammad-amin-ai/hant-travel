import dynamic from "next/dynamic";
// import Header from "@/components/header/Header";
// import Banner from "@/components/banner/Banner1";
// import BannerBottom from "@/components/banner/Banner1Bottom";
// import Destination from "@/components/destination/Destination1";
// import HomeFacilitySlide from "@/components/facilitySlide/Home1FacilitySlide";
// import HomeFacilities from "@/components/facilitySlide/Home1Fecilities2";
// import Footer from "@/components/footer/Footer";
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
  const f = useTranslations("facility")
  const a = useTranslations("affordable")
  const v = useTranslations("video")
  const w = useTranslations("why")
  const o = useTranslations("our")
  const vi = useTranslations("visa")
  const fo = useTranslations("footer")
  const tour = [
    {
      title: d("country")
    },
    {
      title: d("explore")
    },
    {
      title: d("top")
    }
  ]
  const bannerBottom = [
    {
      title: t("destination")
    },
    {
      title: t("type")
    },
    {
      title: t('day')
    },
    {
      title: t('category')
    }
  ]
  const facility = [
    {
      title: f("title"),
    },
    {
      title: f("subTitle"),
    },
    {
      title: f("start"),
    },
    {
      title: f("per"),
    }
  ]
  const video = [
    {
      title: v("save")
    },
    {
      title: v("hadjj")
    },
    {
      title: v("title")
    }
  ]
  const affordable = [
    {
      title: a("title")
    },
    {
      title: a("subtitle")
    },
    {
      title: a("view")
    },
    {
      title: f("start"),
    },
    {
      title: f("per"),
    }
  ]
  const why = [
    {
      text: w("title"),
    },
    {
      text: w("subtitle"),
    },
    {
      text: w("why1"),
    },
    {
      text: w("whyT1"),
    },
    {
      text: w("why2"),
    },
    {
      text: w("whyT2"),
    },
    {
      text: w("why3"),
    },
    {
      text: w("whyT3"),
    },
    {
      text: w("why4"),
    },
    {
      text: w("whyT4"),
    },
    {
      text: w("why5"),
    },
    {
      text: w("whyT5"),
    },
    {
      text: w("why6"),
    },
    {
      text: w("whyT6"),
    }
  ]
  const our = [
    {
      text: o("title")
    },
    {
      text: o("subtitle"),
    },
    {
      text: o("description")
    },
    {
      text: o("list1")
    },
    {
      text: o("list2")
    },
    {
      text: o("list3")
    },
    {
      text: o("list4")
    },
    {
      text: o("list5")
    },
    {
      text: o("list6")
    }

  ]
  const visa = [
    {
      text: vi("title")
    },
    {
      text: vi("subtitle")
    },
    {
      text: vi("tax")
    },
    {
      text: vi("eVisa")
    }

  ]
  const footer = [
    {
      text: fo("title")
    },
    {
      text: fo("link")
    },
    {
      text: fo("whatsapp")
    },
    {
      text: fo("email")
    },
    {
      text: fo("address")
    },
    {
      text: fo("we")
    },
    {
      text: fo("payment")
    },
    {
      text: fo("policy")
    },
    {
      text: fo("terms")
    }
  ]
  return (
    <>
      <Header/>
      <Banner banner={t("book")}/>
      <BannerBottom data={bannerBottom} search={t("search")}/>
      <Destination data={tour}/>
      <HomeFacilities title={facility} book={t("book")}/>
      <VideoSection title={video} book={t("book")}/>
      <HomeTourPackage data={affordable} book={t("book")}/>
      <HomeWhyChoose data={why}/>
      <HomeFacilitySlide data={our}/>
      <HomeVise data={visa}/>
      <Footer data={footer} book={t("book")}/>
    </>
  );
}
