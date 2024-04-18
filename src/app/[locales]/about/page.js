import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";
import HomeTestAbout from "@/components/testimonial/Home1Testimonail";
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
  const r = useTranslations("Reviews")
  const t = useTranslations("banner")
  const fo = useTranslations("footer")
  const a = useTranslations("about")
  const w2 = useTranslations("why2Component")
  const about = [
    {
      text: a("breadcrumb")
    },
    {
      text: a("breadcrumbFirst")
    },
    {
      text: a("breadcrumbSecond")
    },
    {
      text: a("title")
    },
    {
      text: a("subtitle")
    },
    {
      text: a("description")
    },
    {
      text: a("item1")
    },
    {
      text: a("item2")
    },
    {
      text: a("item3")
    },
    {
      text: a("item4")
    },
    {
      text: a("button")
    },
    {
      text: a("watch")
    },
    {
      text: a("travelers")
    },
    {
      text: a("success")
    },
    {
      text: a("review")
    },
    {
      text: a("guide")
    },
    {
      text: a("experience")
    }
  ]
  const whyChooseUs = [
    {
      text: w2("title"),
    },
    {
      text: w2("subtitle"),
    },
    {
      text: w2("why1"),
    },
    {
      text: w2("whyT1"),
    },
    {
      text: w2("why2"),
    },
    {
      text: w2("whyT2"),
    },
    {
      text: w2("why3"),
    },
    {
      text: w2("whyT3"),
    },
    {
      text: w2("why4"),
    },
    {
      text: w2("whyT4"),
    },
    {
      text: w2("why5"),
    },
    {
      text: w2("whyT5"),
    },
    {
      text: w2("why6"),
    },
    {
      text: w2("whyT6"),
    }
  ]
  const reviewTitle = r("title")
  const reviewSubtitle = r("subtitle")
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
      <Breadcrumb pagename={about ? about?.[0].text : " "} pagetitle={about ? about?.[2].text : " "}/>
      <Home2About data={about}/>
      <Home2WhyChoose data={whyChooseUs}/>
      <HomeTestAbout title={reviewTitle} subtitle={reviewSubtitle}/>
      <Footer data={footer} book={t("book")}/>
    </>
  );
};

export default page;
