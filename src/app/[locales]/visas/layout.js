import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import {useTranslations} from "next-intl";

export const metadata = {
  title: "HANT TRAVEL",
  description: "Package Details",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const layout = ({children}) => {
  const t = useTranslations("banner")
  const fo = useTranslations("footer")
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
      {children}
      <Footer data={footer} book={t("book")}/>
    </>
  );
};

export default layout;
