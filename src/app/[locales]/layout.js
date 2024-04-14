"use client";
import "../../../public/assets/css/bootstrap-icons.css";
import "../../../public/assets/css/all.min.css";
import "../../../public/assets/css/boxicons.min.css";
import "../../../public/assets/css/fontawesome.min.css";
import "../../../public/assets/css/swiper-bundle.min.css";
import "../../../public/assets/css/nice-select.css";
import "react-modal-video/css/modal-video.css";
import "../../../public/assets/css/slick-theme.css";
import "../../../public/assets/css/slick.css";
import "../../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/dashboard.css";
import {useEffect, useState} from "react";
import Loading from "@/components/common/loading";

export default function RootLayout({children, params: {locale}}) {
  const [isClient, setIsClient] = useState(false)


  useEffect(() => {
    setIsClient(true)
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    isClient ? (
      <html lang={locale}>
      <body>{children}</body>
      </html>
    ) : (
      <Loading/> // Use a more descriptive message or component
    )
  );
}
