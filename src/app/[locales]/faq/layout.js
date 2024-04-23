import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import {useTranslations} from "next-intl";
import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata = {
  title: "HANT TRAVEL",
  description:
    "Frequently asked Question",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const layout = ({children}) => {
  const t = useTranslations("banner")
  const fo = useTranslations("footer")
  const faq = useTranslations("faq")
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
      <Breadcrumb pagename={faq("breadcrumbs")} pagetitle={faq("breadcrumbs")}/>
      {children}
      <Footer data={footer} book={t("book")}/>
    </>
  );
};

export default layout;