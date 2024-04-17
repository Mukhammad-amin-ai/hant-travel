import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";
import Home1Testimonail from "@/components/testimonial/Home1Testimonail";
import {useTranslations} from 'next-intl';
export const metadata = {
  title: "HANT TRAVEL",
  description:
    "About HANT TRAVEL tour agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  const w = useTranslations("why")
  const t = useTranslations("banner")
  const whyChouse = [
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
      <Header />
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <Home2About />
      <Home2WhyChoose data={whyChouse} />
      <Home1Testimonail />
      <Footer data={footer} book={t("book")} />
    </>
  );
};

export default page;
