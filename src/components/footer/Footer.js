"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";
import navRu from "@/data/ru/nav.json";
import navUz from "@/data/uz/nav.json";
import navEn from "@/data/en/nav.json";
import {useSelector} from "react-redux";

const Footer = ({data, book}) => {
  let language = useSelector((state) => state.language.languageValue)
  let [nav, setNav] = useState(navEn)
  let languageFinder = () => {
    if (language === 'en') {
      setNav(navEn)
    }
    if (language === 'ru') {
      setNav(navRu)
    }
    if (language === 'uz') {
      setNav(navUz)
    }
  }

  useEffect(() => {
    languageFinder()
  }, [language, nav]);

  return (
    <footer className={`footer-section `}>
      <div className="container">
        <div className="footer-top">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href={`/${language}`}>
                    <img src="/assets/img/logo.svg" alt=""/>
                  </Link>
                </div>
                <h3>
                  {data ? data?.[0].text : " "}
                </h3>
                <Link href={`/${language}/package`} className="primary-btn1">
                  {book}
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>{data ? data?.[1].text : " "}</h5>
                </div>
                <ul className="widget-list">
                  {
                    nav.map((item, index) => (
                      <li key={index}>
                        <Link href={`/${language}${item.link}`}>{item.label}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-md-start">
              <div className="footer-widget">
                <div className="single-contact mb-30">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g clipPath="url(#clip0_1139_225)">
                        <path
                          d="M17.5107 13.2102L14.9988 10.6982C14.1016 9.80111 12.5765 10.16 12.2177 11.3262C11.9485 12.1337 11.0514 12.5822 10.244 12.4028C8.44974 11.9542 6.0275 9.62168 5.57894 7.73772C5.3098 6.93027 5.84808 6.03314 6.65549 5.76404C7.82176 5.40519 8.18061 3.88007 7.28348 2.98295L4.77153 0.470991C4.05382 -0.156997 2.97727 -0.156997 2.34929 0.470991L0.644745 2.17553C-1.0598 3.96978 0.82417 8.72455 5.04066 12.941C9.25716 17.1575 14.0119 19.1313 15.8062 17.337L17.5107 15.6324C18.1387 14.9147 18.1387 13.8382 17.5107 13.2102Z"/>
                      </g>
                    </svg>
                    <h5>{data ? data?.[2].text : " "}</h5>
                  </div>
                  <a href="tel:998979297315">+998-97-929-73-15</a>
                </div>
                <div className="single-contact mb-35">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g clipPath="url(#clip0_1139_218)">
                        <path
                          d="M6.56266 13.2091V16.6876C6.56324 16.8058 6.60099 16.9208 6.67058 17.0164C6.74017 17.112 6.83807 17.1832 6.9504 17.22C7.06274 17.2569 7.18382 17.2574 7.29648 17.2216C7.40915 17.1858 7.5077 17.1155 7.57817 17.0206L9.61292 14.2516L6.56266 13.2091ZM17.7639 0.104306C17.6794 0.044121 17.5799 0.00848417 17.4764 0.00133654C17.3729 -0.00581108 17.2694 0.015809 17.1774 0.0638058L0.302415 8.87631C0.205322 8.92762 0.125322 9.00617 0.0722333 9.1023C0.0191447 9.19844 -0.00472288 9.30798 0.00355981 9.41749C0.0118425 9.52699 0.0519151 9.6317 0.11886 9.71875C0.185804 9.80581 0.276708 9.87143 0.380415 9.90756L5.07166 11.5111L15.0624 2.96856L7.33141 12.2828L15.1937 14.9701C15.2717 14.9963 15.3545 15.0051 15.4363 14.996C15.5181 14.9868 15.5969 14.9599 15.6672 14.9171C15.7375 14.8743 15.7976 14.8167 15.8433 14.7482C15.8889 14.6798 15.9191 14.6021 15.9317 14.5208L17.9942 0.645806C18.0094 0.543093 17.996 0.438159 17.9554 0.342598C17.9147 0.247038 17.8485 0.164569 17.7639 0.104306Z"/>
                      </g>
                    </svg>
                    <h5>{data ? data?.[3].text : " "}</h5>
                  </div>
                  <a href="mailto:info@hant-travel.com">info@hant-travel.com</a>
                </div>
                <div className="single-contact">
                  <div className="widget-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g clipPath="url(#clip0_1137_183)">
                        <path
                          d="M14.3281 3.08241C13.2357 1.19719 11.2954 0.0454395 9.13767 0.00142383C9.04556 -0.000474609 8.95285 -0.000474609 8.86071 0.00142383C6.70303 0.0454395 4.76268 1.19719 3.67024 3.08241C2.5536 5.0094 2.52305 7.32408 3.5885 9.27424L8.05204 17.4441C8.05405 17.4477 8.05605 17.4513 8.05812 17.4549C8.25451 17.7963 8.60632 18 8.99926 18C9.39216 18 9.74397 17.7962 9.94032 17.4549C9.94239 17.4513 9.9444 17.4477 9.9464 17.4441L14.4099 9.27424C15.4753 7.32408 15.4448 5.0094 14.3281 3.08241ZM8.99919 8.15627C7.60345 8.15627 6.46794 7.02076 6.46794 5.62502C6.46794 4.22928 7.60345 3.09377 8.99919 3.09377C10.3949 3.09377 11.5304 4.22928 11.5304 5.62502C11.5304 7.02076 10.395 8.15627 8.99919 8.15627Z"/>
                      </g>
                    </svg>
                    <h5>{data ? data?.[4].text : " "}</h5>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">
                    Samarkand,Uzbekistan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>{data ? data?.[5].text : " "}</h5>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.229690715327!2d66.97509347504317!3d39.65216355810687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18b7c2e59337%3A0x532c8e039ecc92af!2z0J_Qu9C-0YnQsNC00YwgItCg0LXQs9C40YHRgtC-0L0nJw!5e0!3m2!1sru!2s!4v1712979259305!5m2!1sru!2s"
                  width="300" height="150" style={{border: 'none'}}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="payment-partner">
                  <div className="widget-title">
                    <h5>{data ? data?.[6].text : " "}</h5>
                  </div>
                  <div className="icons">
                    <ul>
                      <li>
                        <img
                          width={35}
                          height={25}
                          src="/assets/images/logos/78027.webp"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          width={35}
                          height={25}
                          src="/assets/images/logos/78402.webp"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div
              className="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
              <ul className="social-list">
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bx bxl-instagram"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/">
                    <i className='bx bxl-trip-advisor'></i>
                  </a>
                </li>
              </ul>
              <p>
                ©Copyright 2024 HANT TRAVEL
              </p>
              <div className="footer-right">
                <ul>
                  <li>
                    <Link href={`/${language}/policy`}>
                      {data ? data?.[7].text : " "}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${language}/terms`}>
                      {data ? data?.[8].text : " "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
